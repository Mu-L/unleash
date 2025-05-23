import supertest, { type Test } from 'supertest';
import createStores from '../../../test/fixtures/store.js';
import permissions from '../../../test/fixtures/permissions.js';
import getApp from '../../app.js';
import { createTestConfig } from '../../../test/config/test-config.js';
import { createServices } from '../../services/index.js';
import type { ITagStore } from '../../types/index.js';
import type TestAgent from 'supertest/lib/agent.d.ts';

async function getSetup() {
    const base = `/random${Math.round(Math.random() * 1000)}`;
    const stores = createStores();
    const perms = permissions();
    const config = createTestConfig({
        server: { baseUriPath: base },
        preRouterHook: perms.hook,
    });
    const services = createServices(stores, config);
    const app = await getApp(config, stores, services);

    return {
        base,
        perms,
        tagStore: stores.tagStore,
        request: supertest(app),
    };
}

let base: string;
let tagStore: ITagStore;
let request: TestAgent<Test>;

beforeEach(async () => {
    const setup = await getSetup();
    base = setup.base;
    tagStore = setup.tagStore;
    request = setup.request;
});

test('should get empty getTags via admin', () => {
    expect.assertions(1);
    return request
        .get(`${base}/api/admin/tags`)
        .expect('Content-Type', /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.tags.length === 0).toBe(true);
        });
});

test('should get all tags added', () => {
    expect.assertions(1);
    tagStore.createTag({
        type: 'simple',
        value: 'TeamGreen',
    });

    return request
        .get(`${base}/api/admin/tags`)
        .expect('Content-Type', /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.tags.length === 1).toBe(true);
        });
});

test('should be able to get single tag by type and value', async () => {
    expect.assertions(1);
    await tagStore.createTag({ value: 'TeamRed', type: 'simple' });
    return request
        .get(`${base}/api/admin/tags/simple/TeamRed`)
        .expect('Content-Type', /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.tag.value).toBe('TeamRed');
        });
});

test('trying to get non-existing tag by name and type should not be found', () =>
    request.get(`${base}/api/admin/tags/simple/TeamRed`).expect((res) => {
        expect(res.status).toBe(404);
    }));
test('should be able to delete a tag', () => {
    expect.assertions(0);
    tagStore.createTag({ type: 'simple', value: 'TeamRed' });
    return request
        .delete(`${base}/api/admin/tags/simple/TeamGreen`)
        .expect(200);
});

test('should get empty tags of type', () => {
    expect.assertions(1);
    return request
        .get(`${base}/api/admin/tags/simple`)
        .expect('Content-Type', /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.tags.length).toBe(0);
        });
});

test('should be able to filter by type', () => {
    tagStore.createTag({ type: 'simple', value: 'TeamRed' });
    tagStore.createTag({ type: 'slack', value: 'TeamGreen' });
    return request
        .get(`${base}/api/admin/tags/simple`)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res) => {
            expect(res.body.tags.length).toBe(1);
            expect(res.body.tags[0].value).toBe('TeamRed');
        });
});
