--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Ubuntu 14.8-0ubuntu0.22.10.1)
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-0ubuntu0.22.10.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: action_set_events; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.projects VALUES ('default', 'Default', 'Default project', '2024-10-28 09:13:56.524556', 100, '2024-10-28 09:13:56.778044+01', NULL);


--
-- Data for Name: action_sets; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: actions; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: addons; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.users VALUES (-1337, 'Unleash System', 'unleash_system_user', NULL, NULL, NULL, 0, '2024-10-28 09:13:57.270788', NULL, NULL, '[]', NULL, false, -1337, true, NULL, NULL, NULL);
INSERT INTO public.users VALUES (-42, 'Unleash Admin Token User', 'unleash_admin_token', NULL, NULL, NULL, 0, '2024-10-28 09:13:57.317929', NULL, NULL, '[]', NULL, false, -1337, true, NULL, NULL, NULL);


--
-- Data for Name: ai_chats; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: api_tokens; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: api_token_project; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: banners; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: environments; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.environments VALUES ('default', '2024-10-28 09:13:56.739449+01', 1, 'production', false, true);
INSERT INTO public.environments VALUES ('development', '2024-10-28 09:13:56.746865+01', 2, 'development', true, false);
INSERT INTO public.environments VALUES ('production', '2024-10-28 09:13:56.746865+01', 3, 'production', true, false);


--
-- Data for Name: change_requests; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: change_request_approvals; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: change_request_comments; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: features; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: change_request_events; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: change_request_rejections; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: change_request_schedule; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: change_request_settings; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: client_applications; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: client_applications_usage; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: client_instances; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: client_metrics_env; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: client_metrics_env_daily; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: client_metrics_env_variants; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: client_metrics_env_variants_daily; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: context_fields; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.context_fields VALUES ('environment', 'Allows you to constrain on application environment', 0, NULL, '2024-10-28 09:13:56.4792', '2024-10-28 09:13:56.4792', false);
INSERT INTO public.context_fields VALUES ('userId', 'Allows you to constrain on userId', 1, NULL, '2024-10-28 09:13:56.4792', '2024-10-28 09:13:56.4792', false);
INSERT INTO public.context_fields VALUES ('appName', 'Allows you to constrain on application name', 2, NULL, '2024-10-28 09:13:56.4792', '2024-10-28 09:13:56.4792', false);
INSERT INTO public.context_fields VALUES ('currentTime', 'Allows you to constrain on date values', 3, NULL, '2024-10-28 09:13:56.819473', '2024-10-28 09:13:56.819473', false);
INSERT INTO public.context_fields VALUES ('sessionId', 'Allows you to constrain on sessionId', 4, NULL, '2024-10-28 09:13:57.041511', '2024-10-28 09:13:57.041511', true);


--
-- Data for Name: dependent_features; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: environment_type_trends; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.events VALUES (1, '2024-10-28 09:13:56.397452+01', 'strategy-created', 'migration', '{"name":"default","description":"Default on or off Strategy."}', '[]', NULL, NULL, NULL, NULL, true, NULL, NULL);
INSERT INTO public.events VALUES (2, '2024-10-28 09:13:56.427382+01', 'strategy-created', 'migration', '{"name":"userWithId","description":"Active for users with a userId defined in the userIds-list","parameters":[{"name":"userIds","type":"list","description":"","required":false}]}', '[]', NULL, NULL, NULL, NULL, true, NULL, NULL);
INSERT INTO public.events VALUES (3, '2024-10-28 09:13:56.427382+01', 'strategy-created', 'migration', '{"name":"applicationHostname","description":"Active for client instances with a hostName in the hostNames-list.","parameters":[{"name":"hostNames","type":"list","description":"List of hostnames to enable the feature toggle for.","required":false}]}', '[]', NULL, NULL, NULL, NULL, true, NULL, NULL);
INSERT INTO public.events VALUES (4, '2024-10-28 09:13:56.427382+01', 'strategy-created', 'migration', '{"name":"remoteAddress","description":"Active for remote addresses defined in the IPs list.","parameters":[{"name":"IPs","type":"list","description":"List of IPs to enable the feature toggle for.","required":true}]}', '[]', NULL, NULL, NULL, NULL, true, NULL, NULL);
INSERT INTO public.events VALUES (5, '2024-10-28 09:13:56.476541+01', 'strategy-created', 'migration', '{"name":"flexibleRollout","description":"Gradually activate feature toggle based on sane stickiness","parameters":[{"name":"rollout","type":"percentage","description":"","required":false},{"name":"stickiness","type":"string","description":"Used define stickiness. Possible values: default, userId, sessionId, random","required":true},{"name":"groupId","type":"string","description":"Used to define a activation groups, which allows you to correlate across feature toggles.","required":true}]}', '[]', NULL, NULL, NULL, NULL, true, NULL, NULL);


--
-- Data for Name: favorite_features; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: favorite_projects; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: feature_environments; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: feature_lifecycles; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: feature_strategies; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: segments; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: feature_strategy_segment; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: tag_types; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.tag_types VALUES ('simple', 'Used to simplify filtering of features', '#', '2024-10-28 09:13:56.535745+01');


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: feature_tag; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: feature_types; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.feature_types VALUES ('release', 'Release', 'Release feature toggles are used to release new features.', 40, '2024-10-28 09:13:56.523265+01', NULL);
INSERT INTO public.feature_types VALUES ('experiment', 'Experiment', 'Experiment feature toggles are used to test and verify multiple different versions of a feature.', 40, '2024-10-28 09:13:56.523265+01', NULL);
INSERT INTO public.feature_types VALUES ('operational', 'Operational', 'Operational feature toggles are used to control aspects of a rollout.', 7, '2024-10-28 09:13:56.523265+01', NULL);
INSERT INTO public.feature_types VALUES ('kill-switch', 'Kill switch', 'Kill switch feature toggles are used to quickly turn on or off critical functionality in your system.', NULL, '2024-10-28 09:13:56.523265+01', NULL);
INSERT INTO public.feature_types VALUES ('permission', 'Permission', 'Permission feature toggles are used to control permissions in your system.', NULL, '2024-10-28 09:13:56.523265+01', NULL);


--
-- Data for Name: feedback; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: flag_trends; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.roles VALUES (1, 'Admin', 'Users with the root admin role have superuser access to Unleash and can perform any operation within the Unleash platform.', 'root', '2024-10-28 09:13:56.580983+01', NULL, NULL);
INSERT INTO public.roles VALUES (2, 'Editor', 'Users with the root editor role have access to most features in Unleash, but can not manage users and roles in the root scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default.', 'root', '2024-10-28 09:13:56.580983+01', NULL, NULL);
INSERT INTO public.roles VALUES (3, 'Viewer', 'Users with the root viewer role can only read root resources in Unleash. Viewers can be added to specific projects as project members. Users with the viewer role may not view API tokens.', 'root', '2024-10-28 09:13:56.580983+01', NULL, NULL);
INSERT INTO public.roles VALUES (4, 'Owner', 'Users with the project owner role have full control over the project, and can add and manage other users within the project context, manage feature flags within the project, and control advanced project features like archiving and deleting the project.', 'project', '2024-10-28 09:13:56.634383+01', NULL, NULL);
INSERT INTO public.roles VALUES (5, 'Member', 'Users with the project member role are allowed to view, create, and update feature flags within a project, but have limited permissions in regards to managing the project''s user access and can not archive or delete the project.', 'project', '2024-10-28 09:13:56.634383+01', NULL, NULL);


--
-- Data for Name: groups; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: group_role; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: group_user; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: integration_events; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: jobs; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: last_seen_at_metrics; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: login_history; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.migrations VALUES (2404, '/20141020151056-initial-schema', '2024-10-28 09:13:56.39');
INSERT INTO public.migrations VALUES (2405, '/20141110144153-add-description-to-features', '2024-10-28 09:13:56.393');
INSERT INTO public.migrations VALUES (2406, '/20141117200435-add-parameters-template-to-strategies', '2024-10-28 09:13:56.394');
INSERT INTO public.migrations VALUES (2407, '/20141117202209-insert-default-strategy', '2024-10-28 09:13:56.396');
INSERT INTO public.migrations VALUES (2408, '/20141118071458-default-strategy-event', '2024-10-28 09:13:56.397');
INSERT INTO public.migrations VALUES (2409, '/20141215210141-005-archived-flag-to-features', '2024-10-28 09:13:56.399');
INSERT INTO public.migrations VALUES (2410, '/20150210152531-006-rename-eventtype', '2024-10-28 09:13:56.4');
INSERT INTO public.migrations VALUES (2411, '/20160618193924-add-strategies-to-features', '2024-10-28 09:13:56.402');
INSERT INTO public.migrations VALUES (2412, '/20161027134128-create-metrics', '2024-10-28 09:13:56.408');
INSERT INTO public.migrations VALUES (2413, '/20161104074441-create-client-instances', '2024-10-28 09:13:56.413');
INSERT INTO public.migrations VALUES (2414, '/20161205203516-create-client-applications', '2024-10-28 09:13:56.419');
INSERT INTO public.migrations VALUES (2415, '/20161212101749-better-strategy-parameter-definitions', '2024-10-28 09:13:56.424');
INSERT INTO public.migrations VALUES (2416, '/20170211085502-built-in-strategies', '2024-10-28 09:13:56.426');
INSERT INTO public.migrations VALUES (2417, '/20170211090541-add-default-strategies', '2024-10-28 09:13:56.429');
INSERT INTO public.migrations VALUES (2418, '/20170306233934-timestamp-with-tz', '2024-10-28 09:13:56.467');
INSERT INTO public.migrations VALUES (2419, '/20170628205541-add-sdk-version-to-client-instances', '2024-10-28 09:13:56.472');
INSERT INTO public.migrations VALUES (2420, '/20190123204125-add-variants-to-features', '2024-10-28 09:13:56.475');
INSERT INTO public.migrations VALUES (2421, '/20191023184858-flexible-rollout-strategy', '2024-10-28 09:13:56.478');
INSERT INTO public.migrations VALUES (2422, '/20200102184820-create-context-fields', '2024-10-28 09:13:56.485');
INSERT INTO public.migrations VALUES (2423, '/20200227202711-settings', '2024-10-28 09:13:56.492');
INSERT INTO public.migrations VALUES (2424, '/20200329191251-settings-secret', '2024-10-28 09:13:56.495');
INSERT INTO public.migrations VALUES (2425, '/20200416201319-create-users', '2024-10-28 09:13:56.507');
INSERT INTO public.migrations VALUES (2426, '/20200429175747-users-settings', '2024-10-28 09:13:56.51');
INSERT INTO public.migrations VALUES (2427, '/20200805091409-add-feature-toggle-type', '2024-10-28 09:13:56.518');
INSERT INTO public.migrations VALUES (2428, '/20200805094311-add-feature-type-to-features', '2024-10-28 09:13:56.52');
INSERT INTO public.migrations VALUES (2429, '/20200806091734-add-stale-flag-to-features', '2024-10-28 09:13:56.522');
INSERT INTO public.migrations VALUES (2430, '/20200810200901-add-created-at-to-feature-types', '2024-10-28 09:13:56.523');
INSERT INTO public.migrations VALUES (2431, '/20200928194947-add-projects', '2024-10-28 09:13:56.53');
INSERT INTO public.migrations VALUES (2432, '/20200928195238-add-project-id-to-features', '2024-10-28 09:13:56.532');
INSERT INTO public.migrations VALUES (2433, '/20201216140726-add-last-seen-to-features', '2024-10-28 09:13:56.534');
INSERT INTO public.migrations VALUES (2434, '/20210105083014-add-tag-and-tag-types', '2024-10-28 09:13:56.552');
INSERT INTO public.migrations VALUES (2435, '/20210119084617-add-addon-table', '2024-10-28 09:13:56.562');
INSERT INTO public.migrations VALUES (2436, '/20210121115438-add-deprecated-column-to-strategies', '2024-10-28 09:13:56.565');
INSERT INTO public.migrations VALUES (2437, '/20210127094440-add-tags-column-to-events', '2024-10-28 09:13:56.567');
INSERT INTO public.migrations VALUES (2438, '/20210208203708-add-stickiness-to-context', '2024-10-28 09:13:56.569');
INSERT INTO public.migrations VALUES (2439, '/20210212114759-add-session-table', '2024-10-28 09:13:56.579');
INSERT INTO public.migrations VALUES (2440, '/20210217195834-rbac-tables', '2024-10-28 09:13:56.594');
INSERT INTO public.migrations VALUES (2441, '/20210218090213-generate-server-identifier', '2024-10-28 09:13:56.6');
INSERT INTO public.migrations VALUES (2442, '/20210302080040-add-pk-to-client-instances', '2024-10-28 09:13:56.604');
INSERT INTO public.migrations VALUES (2443, '/20210304115810-change-default-timestamp-to-now', '2024-10-28 09:13:56.606');
INSERT INTO public.migrations VALUES (2444, '/20210304141005-add-announce-field-to-application', '2024-10-28 09:13:56.607');
INSERT INTO public.migrations VALUES (2445, '/20210304150739-add-created-by-to-application', '2024-10-28 09:13:56.609');
INSERT INTO public.migrations VALUES (2446, '/20210322104356-api-tokens-table', '2024-10-28 09:13:56.614');
INSERT INTO public.migrations VALUES (2447, '/20210322104357-api-tokens-convert-enterprise', '2024-10-28 09:13:56.615');
INSERT INTO public.migrations VALUES (2448, '/20210323073508-reset-application-announcements', '2024-10-28 09:13:56.617');
INSERT INTO public.migrations VALUES (2449, '/20210409120136-create-reset-token-table', '2024-10-28 09:13:56.621');
INSERT INTO public.migrations VALUES (2450, '/20210414141220-fix-misspellings-in-role-descriptions', '2024-10-28 09:13:56.623');
INSERT INTO public.migrations VALUES (2451, '/20210415173116-rbac-rename-roles', '2024-10-28 09:13:56.624');
INSERT INTO public.migrations VALUES (2452, '/20210421133845-add-sort-order-to-strategies', '2024-10-28 09:13:56.625');
INSERT INTO public.migrations VALUES (2453, '/20210421135405-add-display-name-and-update-description-for-strategies', '2024-10-28 09:13:56.626');
INSERT INTO public.migrations VALUES (2454, '/20210423103647-lowercase-all-emails', '2024-10-28 09:13:56.629');
INSERT INTO public.migrations VALUES (2455, '/20210428062103-user-permission-to-rbac', '2024-10-28 09:13:56.631');
INSERT INTO public.migrations VALUES (2456, '/20210428103922-patch-role-table', '2024-10-28 09:13:56.633');
INSERT INTO public.migrations VALUES (2457, '/20210428103923-onboard-projects-to-rbac', '2024-10-28 09:13:56.636');
INSERT INTO public.migrations VALUES (2458, '/20210428103924-patch-admin-role-name', '2024-10-28 09:13:56.637');
INSERT INTO public.migrations VALUES (2459, '/20210428103924-patch-admin_role', '2024-10-28 09:13:56.648');
INSERT INTO public.migrations VALUES (2460, '/20210428103924-patch-role_permissions', '2024-10-28 09:13:56.65');
INSERT INTO public.migrations VALUES (2461, '/20210504101429-deprecate-strategies', '2024-10-28 09:13:56.652');
INSERT INTO public.migrations VALUES (2462, '/20210520171325-update-role-descriptions', '2024-10-28 09:13:56.653');
INSERT INTO public.migrations VALUES (2463, '/20210602115555-create-feedback-table', '2024-10-28 09:13:56.661');
INSERT INTO public.migrations VALUES (2464, '/20210610085817-features-strategies-table', '2024-10-28 09:13:56.671');
INSERT INTO public.migrations VALUES (2465, '/20210615115226-migrate-strategies-to-feature-strategies', '2024-10-28 09:13:56.674');
INSERT INTO public.migrations VALUES (2466, '/20210618091331-project-environments-table', '2024-10-28 09:13:56.679');
INSERT INTO public.migrations VALUES (2467, '/20210618100913-add-cascade-for-user-feedback', '2024-10-28 09:13:56.682');
INSERT INTO public.migrations VALUES (2468, '/20210624114602-change-type-of-feature-archived', '2024-10-28 09:13:56.688');
INSERT INTO public.migrations VALUES (2469, '/20210624114855-drop-strategies-column-from-features', '2024-10-28 09:13:56.691');
INSERT INTO public.migrations VALUES (2470, '/20210624115109-drop-enabled-column-from-features', '2024-10-28 09:13:56.694');
INSERT INTO public.migrations VALUES (2471, '/20210625102126-connect-default-project-to-global-environment', '2024-10-28 09:13:56.696');
INSERT INTO public.migrations VALUES (2472, '/20210629130734-add-health-rating-to-project', '2024-10-28 09:13:56.698');
INSERT INTO public.migrations VALUES (2473, '/20210830113948-connect-projects-to-global-envrionments', '2024-10-28 09:13:56.7');
INSERT INTO public.migrations VALUES (2474, '/20210831072631-add-sort-order-and-type-to-env', '2024-10-28 09:13:56.705');
INSERT INTO public.migrations VALUES (2475, '/20210907124058-add-dbcritic-indices', '2024-10-28 09:13:56.722');
INSERT INTO public.migrations VALUES (2476, '/20210907124850-add-dbcritic-primary-keys', '2024-10-28 09:13:56.726');
INSERT INTO public.migrations VALUES (2477, '/20210908100701-add-enabled-to-environments', '2024-10-28 09:13:56.727');
INSERT INTO public.migrations VALUES (2478, '/20210909085651-add-protected-field-to-environments', '2024-10-28 09:13:56.73');
INSERT INTO public.migrations VALUES (2479, '/20210913103159-api-keys-scoping', '2024-10-28 09:13:56.732');
INSERT INTO public.migrations VALUES (2480, '/20210915122001-add-project-and-environment-columns-to-events', '2024-10-28 09:13:56.738');
INSERT INTO public.migrations VALUES (2481, '/20210920104218-rename-global-env-to-default-env', '2024-10-28 09:13:56.741');
INSERT INTO public.migrations VALUES (2482, '/20210921105032-client-api-tokens-default', '2024-10-28 09:13:56.742');
INSERT INTO public.migrations VALUES (2483, '/20210922084509-add-non-null-constraint-to-environment-type', '2024-10-28 09:13:56.743');
INSERT INTO public.migrations VALUES (2484, '/20210922120521-add-tag-type-permission', '2024-10-28 09:13:56.745');
INSERT INTO public.migrations VALUES (2485, '/20210928065411-remove-displayname-from-environments', '2024-10-28 09:13:56.746');
INSERT INTO public.migrations VALUES (2486, '/20210928080601-add-development-and-production-environments', '2024-10-28 09:13:56.747');
INSERT INTO public.migrations VALUES (2487, '/20210928082228-connect-default-environment-to-all-existing-projects', '2024-10-28 09:13:56.748');
INSERT INTO public.migrations VALUES (2488, '/20211004104917-client-metrics-env', '2024-10-28 09:13:56.754');
INSERT INTO public.migrations VALUES (2489, '/20211011094226-add-environment-to-client-instances', '2024-10-28 09:13:56.759');
INSERT INTO public.migrations VALUES (2490, '/20211013093114-feature-strategies-parameters-not-null', '2024-10-28 09:13:56.76');
INSERT INTO public.migrations VALUES (2491, '/20211029094324-set-sort-order-env', '2024-10-28 09:13:56.761');
INSERT INTO public.migrations VALUES (2492, '/20211105104316-add-feature-name-column-to-events', '2024-10-28 09:13:56.764');
INSERT INTO public.migrations VALUES (2493, '/20211105105509-add-predata-column-to-events', '2024-10-28 09:13:56.766');
INSERT INTO public.migrations VALUES (2494, '/20211108130333-create-user-splash-table', '2024-10-28 09:13:56.773');
INSERT INTO public.migrations VALUES (2495, '/20211109103930-add-splash-entry-for-users', '2024-10-28 09:13:56.775');
INSERT INTO public.migrations VALUES (2496, '/20211126112551-disable-default-environment', '2024-10-28 09:13:56.777');
INSERT INTO public.migrations VALUES (2497, '/20211130142314-add-updated-at-to-projects', '2024-10-28 09:13:56.778');
INSERT INTO public.migrations VALUES (2498, '/20211202120808-add-custom-roles', '2024-10-28 09:13:56.787');
INSERT INTO public.migrations VALUES (2499, '/20211209205201-drop-client-metrics', '2024-10-28 09:13:56.789');
INSERT INTO public.migrations VALUES (2500, '/20220103134659-add-permissions-to-project-roles', '2024-10-28 09:13:56.792');
INSERT INTO public.migrations VALUES (2501, '/20220103143843-add-permissions-to-editor-role', '2024-10-28 09:13:56.793');
INSERT INTO public.migrations VALUES (2502, '/20220111112804-update-permission-descriptions', '2024-10-28 09:13:56.795');
INSERT INTO public.migrations VALUES (2503, '/20220111115613-move-feature-toggle-permission', '2024-10-28 09:13:56.796');
INSERT INTO public.migrations VALUES (2504, '/20220111120346-roles-unique-name', '2024-10-28 09:13:56.8');
INSERT INTO public.migrations VALUES (2505, '/20220111121010-update-project-for-editor-role', '2024-10-28 09:13:56.802');
INSERT INTO public.migrations VALUES (2506, '/20220111125620-role-permission-empty-string-for-non-environment-type', '2024-10-28 09:13:56.804');
INSERT INTO public.migrations VALUES (2507, '/20220119182603-update-toggle-types-description', '2024-10-28 09:13:56.805');
INSERT INTO public.migrations VALUES (2508, '/20220125200908-convert-old-feature-events', '2024-10-28 09:13:56.807');
INSERT INTO public.migrations VALUES (2509, '/20220128081242-add-impressiondata-to-features', '2024-10-28 09:13:56.808');
INSERT INTO public.migrations VALUES (2510, '/20220129113106-metrics-counters-as-bigint', '2024-10-28 09:13:56.816');
INSERT INTO public.migrations VALUES (2511, '/20220131082150-reset-feedback-form', '2024-10-28 09:13:56.817');
INSERT INTO public.migrations VALUES (2512, '/20220224081422-remove-project-column-from-roles', '2024-10-28 09:13:56.818');
INSERT INTO public.migrations VALUES (2513, '/20220224111626-add-current-time-context-field', '2024-10-28 09:13:56.819');
INSERT INTO public.migrations VALUES (2514, '/20220307130902-add-segments', '2024-10-28 09:13:56.829');
INSERT INTO public.migrations VALUES (2515, '/20220331085057-add-api-link-table', '2024-10-28 09:13:56.834');
INSERT INTO public.migrations VALUES (2516, '/20220405103233-add-segments-name-index', '2024-10-28 09:13:56.837');
INSERT INTO public.migrations VALUES (2517, '/20220408081222-clean-up-duplicate-foreign-key-role-permission', '2024-10-28 09:13:56.839');
INSERT INTO public.migrations VALUES (2518, '/20220411103724-add-legal-value-description', '2024-10-28 09:13:56.845');
INSERT INTO public.migrations VALUES (2519, '/20220425090847-add-token-permission', '2024-10-28 09:13:56.848');
INSERT INTO public.migrations VALUES (2520, '/20220511111823-patch-broken-feature-strategies', '2024-10-28 09:13:56.849');
INSERT INTO public.migrations VALUES (2521, '/20220511124923-fix-patch-broken-feature-strategies', '2024-10-28 09:13:56.851');
INSERT INTO public.migrations VALUES (2522, '/20220528143630-dont-cascade-environment-deletion-to-apitokens', '2024-10-28 09:13:56.853');
INSERT INTO public.migrations VALUES (2523, '/20220603081324-add-archive-at-to-feature-toggle', '2024-10-28 09:13:56.855');
INSERT INTO public.migrations VALUES (2524, '/20220704115624-add-user-groups', '2024-10-28 09:13:56.869');
INSERT INTO public.migrations VALUES (2525, '/20220711084613-add-projects-and-environments-for-addons', '2024-10-28 09:13:56.871');
INSERT INTO public.migrations VALUES (2526, '/20220808084524-add-group-permissions', '2024-10-28 09:13:56.873');
INSERT INTO public.migrations VALUES (2527, '/20220808110415-add-projects-foreign-key', '2024-10-28 09:13:56.875');
INSERT INTO public.migrations VALUES (2528, '/20220816121136-add-metadata-to-api-keys', '2024-10-28 09:13:56.876');
INSERT INTO public.migrations VALUES (2529, '/20220817130250-alter-api-tokens', '2024-10-28 09:13:56.877');
INSERT INTO public.migrations VALUES (2530, '/20220908093515-add-public-signup-tokens', '2024-10-28 09:13:56.888');
INSERT INTO public.migrations VALUES (2531, '/20220912165344-pat-tokens', '2024-10-28 09:13:56.894');
INSERT INTO public.migrations VALUES (2532, '/20220916093515-add-url-to-public-signup-tokens', '2024-10-28 09:13:56.896');
INSERT INTO public.migrations VALUES (2533, '/20220927110212-add-enabled-to-public-signup-tokens', '2024-10-28 09:13:56.898');
INSERT INTO public.migrations VALUES (2534, '/20221010114644-pat-auto-increment', '2024-10-28 09:13:56.905');
INSERT INTO public.migrations VALUES (2535, '/20221011155007-add-user-groups-mappings', '2024-10-28 09:13:56.907');
INSERT INTO public.migrations VALUES (2536, '/20221103111940-fix-migrations', '2024-10-28 09:13:56.909');
INSERT INTO public.migrations VALUES (2537, '/20221103112200-change-request', '2024-10-28 09:13:56.923');
INSERT INTO public.migrations VALUES (2538, '/20221103125732-change-request-remove-unique', '2024-10-28 09:13:56.926');
INSERT INTO public.migrations VALUES (2539, '/20221104123349-change-request-approval', '2024-10-28 09:13:56.931');
INSERT INTO public.migrations VALUES (2540, '/20221107121635-move-variants-to-per-environment', '2024-10-28 09:13:56.936');
INSERT INTO public.migrations VALUES (2541, '/20221107132528-change-request-project-options', '2024-10-28 09:13:56.938');
INSERT INTO public.migrations VALUES (2542, '/20221108114358-add-change-request-permissions', '2024-10-28 09:13:56.94');
INSERT INTO public.migrations VALUES (2543, '/20221110104933-add-change-request-settings', '2024-10-28 09:13:56.944');
INSERT INTO public.migrations VALUES (2544, '/20221110144113-revert-change-request-project-options', '2024-10-28 09:13:56.947');
INSERT INTO public.migrations VALUES (2545, '/20221114150559-change-request-comments', '2024-10-28 09:13:56.953');
INSERT INTO public.migrations VALUES (2546, '/20221115072335-add-required-approvals', '2024-10-28 09:13:56.957');
INSERT INTO public.migrations VALUES (2547, '/20221121114357-add-permission-for-environment-variants', '2024-10-28 09:13:56.959');
INSERT INTO public.migrations VALUES (2548, '/20221121133546-soft-delete-user', '2024-10-28 09:13:56.96');
INSERT INTO public.migrations VALUES (2549, '/20221124123914-add-favorites', '2024-10-28 09:13:56.967');
INSERT INTO public.migrations VALUES (2550, '/20221125185244-change-request-unique-approvals', '2024-10-28 09:13:56.971');
INSERT INTO public.migrations VALUES (2551, '/20221128165141-change-request-min-approvals', '2024-10-28 09:13:56.973');
INSERT INTO public.migrations VALUES (2552, '/20221205122253-skip-change-request', '2024-10-28 09:13:56.975');
INSERT INTO public.migrations VALUES (2553, '/20221220160345-user-pat-permissions', '2024-10-28 09:13:56.977');
INSERT INTO public.migrations VALUES (2554, '/20221221144132-service-account-users', '2024-10-28 09:13:56.979');
INSERT INTO public.migrations VALUES (2555, '/20230125065315-project-stats-table', '2024-10-28 09:13:56.984');
INSERT INTO public.migrations VALUES (2556, '/20230127111638-new-project-stats-field', '2024-10-28 09:13:56.987');
INSERT INTO public.migrations VALUES (2557, '/20230130113337-revert-user-pat-permissions', '2024-10-28 09:13:56.989');
INSERT INTO public.migrations VALUES (2558, '/20230208084046-project-api-token-permissions', '2024-10-28 09:13:56.99');
INSERT INTO public.migrations VALUES (2559, '/20230208093627-assign-project-api-token-permissions-editor', '2024-10-28 09:13:56.992');
INSERT INTO public.migrations VALUES (2560, '/20230208093750-assign-project-api-token-permissions-owner', '2024-10-28 09:13:56.993');
INSERT INTO public.migrations VALUES (2561, '/20230208093942-assign-project-api-token-permissions-member', '2024-10-28 09:13:56.995');
INSERT INTO public.migrations VALUES (2562, '/20230222084211-add-login-events-table', '2024-10-28 09:13:57.003');
INSERT INTO public.migrations VALUES (2563, '/20230222154915-create-notiications-table', '2024-10-28 09:13:57.01');
INSERT INTO public.migrations VALUES (2564, '/20230224093446-drop-createdBy-from-notifications-table', '2024-10-28 09:13:57.012');
INSERT INTO public.migrations VALUES (2565, '/20230227115320-rename-login-events-table-to-sign-on-log', '2024-10-28 09:13:57.013');
INSERT INTO public.migrations VALUES (2566, '/20230227120500-change-display-name-for-variants-per-env-permission', '2024-10-28 09:13:57.015');
INSERT INTO public.migrations VALUES (2567, '/20230227123106-add-setting-for-sign-on-log-retention', '2024-10-28 09:13:57.017');
INSERT INTO public.migrations VALUES (2568, '/20230302133740-rename-sign-on-log-table-to-login-history', '2024-10-28 09:13:57.018');
INSERT INTO public.migrations VALUES (2569, '/20230306103400-add-project-column-to-segments', '2024-10-28 09:13:57.02');
INSERT INTO public.migrations VALUES (2570, '/20230306103400-remove-direct-link-from-segment-permissions-to-admin', '2024-10-28 09:13:57.022');
INSERT INTO public.migrations VALUES (2571, '/20230309174400-add-project-segment-permission', '2024-10-28 09:13:57.023');
INSERT INTO public.migrations VALUES (2572, '/20230314131041-project-settings', '2024-10-28 09:13:57.027');
INSERT INTO public.migrations VALUES (2573, '/20230316092547-remove-project-stats-column', '2024-10-28 09:13:57.028');
INSERT INTO public.migrations VALUES (2574, '/20230411085947-skip-change-request-ui', '2024-10-28 09:13:57.03');
INSERT INTO public.migrations VALUES (2575, '/20230412062635-add-change-request-title', '2024-10-28 09:13:57.031');
INSERT INTO public.migrations VALUES (2576, '/20230412125618-add-title-to-strategy', '2024-10-28 09:13:57.034');
INSERT INTO public.migrations VALUES (2577, '/20230414105818-add-root-role-to-groups', '2024-10-28 09:13:57.035');
INSERT INTO public.migrations VALUES (2578, '/20230419104126-add-disabled-field-to-feature-strategy', '2024-10-28 09:13:57.038');
INSERT INTO public.migrations VALUES (2579, '/20230420125500-v5-strategy-changes', '2024-10-28 09:13:57.04');
INSERT INTO public.migrations VALUES (2580, '/20230420211308-update-context-fields-add-sessionId', '2024-10-28 09:13:57.041');
INSERT INTO public.migrations VALUES (2581, '/20230424090942-project-default-strategy-settings', '2024-10-28 09:13:57.045');
INSERT INTO public.migrations VALUES (2582, '/20230504145945-variant-metrics', '2024-10-28 09:13:57.051');
INSERT INTO public.migrations VALUES (2583, '/20230510113903-fix-api-token-username-migration', '2024-10-28 09:13:57.053');
INSERT INTO public.migrations VALUES (2584, '/20230615122909-fix-env-sort-order', '2024-10-28 09:13:57.055');
INSERT INTO public.migrations VALUES (2585, '/20230619105029-new-fine-grained-api-token-permissions', '2024-10-28 09:13:57.056');
INSERT INTO public.migrations VALUES (2586, '/20230619110243-assign-apitoken-permissions-to-rootroles', '2024-10-28 09:13:57.059');
INSERT INTO public.migrations VALUES (2587, '/20230621141239-refactor-api-token-permissions', '2024-10-28 09:13:57.06');
INSERT INTO public.migrations VALUES (2588, '/20230630080126-delete-deprecated-permissions', '2024-10-28 09:13:57.062');
INSERT INTO public.migrations VALUES (2589, '/20230706123907-events-announced-column', '2024-10-28 09:13:57.063');
INSERT INTO public.migrations VALUES (2590, '/20230711094214-add-potentially-stale-flag', '2024-10-28 09:13:57.065');
INSERT INTO public.migrations VALUES (2591, '/20230711163311-project-feature-limit', '2024-10-28 09:13:57.066');
INSERT INTO public.migrations VALUES (2592, '/20230712091834-strategy-variants', '2024-10-28 09:13:57.07');
INSERT INTO public.migrations VALUES (2593, '/20230802092725-add-last-seen-column-to-feature-environments', '2024-10-28 09:13:57.073');
INSERT INTO public.migrations VALUES (2594, '/20230802141830-add-feature-and-environment-last-seen-at-to-features-view', '2024-10-28 09:13:57.077');
INSERT INTO public.migrations VALUES (2595, '/20230803061359-change-request-optional-feature', '2024-10-28 09:13:57.079');
INSERT INTO public.migrations VALUES (2596, '/20230808104232-update-root-roles-descriptions', '2024-10-28 09:13:57.08');
INSERT INTO public.migrations VALUES (2597, '/20230814095253-change-request-rejections', '2024-10-28 09:13:57.087');
INSERT INTO public.migrations VALUES (2598, '/20230814115436-change-request-timzone-timestamps', '2024-10-28 09:13:57.111');
INSERT INTO public.migrations VALUES (2599, '/20230815065908-change-request-approve-reject-permission', '2024-10-28 09:13:57.114');
INSERT INTO public.migrations VALUES (2600, '/20230817095805-client-applications-usage-table', '2024-10-28 09:13:57.121');
INSERT INTO public.migrations VALUES (2601, '/20230818124614-update-client-applications-usage-table', '2024-10-28 09:13:57.127');
INSERT INTO public.migrations VALUES (2602, '/20230830121352-update-client-applications-usage-table', '2024-10-28 09:13:57.13');
INSERT INTO public.migrations VALUES (2603, '/20230905122605-add-feature-naming-description', '2024-10-28 09:13:57.134');
INSERT INTO public.migrations VALUES (2604, '/20230919104006-dependent-features', '2024-10-28 09:13:57.137');
INSERT INTO public.migrations VALUES (2605, '/20230927071830-reset-pnps-feedback', '2024-10-28 09:13:57.144');
INSERT INTO public.migrations VALUES (2606, '/20230927172930-events-announced-index', '2024-10-28 09:13:57.146');
INSERT INTO public.migrations VALUES (2607, '/20231002122426-update-dependency-permission', '2024-10-28 09:13:57.152');
INSERT INTO public.migrations VALUES (2608, '/20231003113443-last-seen-at-metrics-table', '2024-10-28 09:13:57.154');
INSERT INTO public.migrations VALUES (2609, '/20231004120900-create-changes-stats-table-and-trigger', '2024-10-28 09:13:57.165');
INSERT INTO public.migrations VALUES (2610, '/20231012082537-message-banners', '2024-10-28 09:13:57.173');
INSERT INTO public.migrations VALUES (2611, '/20231019110154-rename-message-banners-table-to-banners', '2024-10-28 09:13:57.175');
INSERT INTO public.migrations VALUES (2612, '/20231024121307-add-change-request-schedule', '2024-10-28 09:13:57.18');
INSERT INTO public.migrations VALUES (2613, '/20231025093422-default-project-mode', '2024-10-28 09:13:57.183');
INSERT INTO public.migrations VALUES (2614, '/20231030091931-add-created-by-and-status-change-request-schedule', '2024-10-28 09:13:57.185');
INSERT INTO public.migrations VALUES (2615, '/20231103064746-change-request-schedule-change-type', '2024-10-28 09:13:57.194');
INSERT INTO public.migrations VALUES (2616, '/20231121153304-add-permission-create-tag-type', '2024-10-28 09:13:57.197');
INSERT INTO public.migrations VALUES (2617, '/20231122121456-dedupe-any-duplicate-permissions', '2024-10-28 09:13:57.199');
INSERT INTO public.migrations VALUES (2618, '/20231123100052-drop-last-seen-foreign-key', '2024-10-28 09:13:57.202');
INSERT INTO public.migrations VALUES (2619, '/20231123155649-favor-permission-name-over-id', '2024-10-28 09:13:57.213');
INSERT INTO public.migrations VALUES (2620, '/20231211121444-features-created-by', '2024-10-28 09:13:57.216');
INSERT INTO public.migrations VALUES (2621, '/20231211122322-feature-types-created-by', '2024-10-28 09:13:57.218');
INSERT INTO public.migrations VALUES (2622, '/20231211122351-feature-tag-created-by', '2024-10-28 09:13:57.22');
INSERT INTO public.migrations VALUES (2623, '/20231211122426-feature-strategies-created-by', '2024-10-28 09:13:57.223');
INSERT INTO public.migrations VALUES (2624, '/20231211132341-add-created-by-to-role-permission', '2024-10-28 09:13:57.225');
INSERT INTO public.migrations VALUES (2625, '/20231211133008-add-created-by-to-role-user', '2024-10-28 09:13:57.227');
INSERT INTO public.migrations VALUES (2626, '/20231211133920-add-created-by-to-roles', '2024-10-28 09:13:57.229');
INSERT INTO public.migrations VALUES (2627, '/20231211134130-add-created-by-to-users', '2024-10-28 09:13:57.231');
INSERT INTO public.migrations VALUES (2628, '/20231211134633-add-created-by-to-apitokens', '2024-10-28 09:13:57.233');
INSERT INTO public.migrations VALUES (2629, '/20231212094044-event-created-by-user-id', '2024-10-28 09:13:57.237');
INSERT INTO public.migrations VALUES (2630, '/20231213111906-add-reason-to-change-request-schedule', '2024-10-28 09:13:57.239');
INSERT INTO public.migrations VALUES (2631, '/20231215105713-incoming-webhooks', '2024-10-28 09:13:57.255');
INSERT INTO public.migrations VALUES (2632, '/20231218165612-inc-webhook-tokens-rename-secret-to-token', '2024-10-28 09:13:57.258');
INSERT INTO public.migrations VALUES (2633, '/20231219100343-rename-new-columns-to-created-by-user-id', '2024-10-28 09:13:57.261');
INSERT INTO public.migrations VALUES (2634, '/20231221143955-feedback-table', '2024-10-28 09:13:57.268');
INSERT INTO public.migrations VALUES (2635, '/20231222071533-unleash-system-user', '2024-10-28 09:13:57.272');
INSERT INTO public.migrations VALUES (2636, '/20240102142100-incoming-webhooks-created-by', '2024-10-28 09:13:57.274');
INSERT INTO public.migrations VALUES (2637, '/20240102205517-observable-events', '2024-10-28 09:13:57.285');
INSERT INTO public.migrations VALUES (2638, '/20240108151652-add-daily-metrics', '2024-10-28 09:13:57.298');
INSERT INTO public.migrations VALUES (2639, '/20240109093021-incoming-webhooks-description', '2024-10-28 09:13:57.3');
INSERT INTO public.migrations VALUES (2640, '/20240109095348-add-reason-column-to-schedule', '2024-10-28 09:13:57.302');
INSERT INTO public.migrations VALUES (2641, '/20240111075911-update-system-user-email', '2024-10-28 09:13:57.303');
INSERT INTO public.migrations VALUES (2642, '/20240111125100-automated-actions', '2024-10-28 09:13:57.315');
INSERT INTO public.migrations VALUES (2643, '/20240116104456-drop-unused-column-permissionid', '2024-10-28 09:13:57.316');
INSERT INTO public.migrations VALUES (2644, '/20240116154700-unleash-admin-token-user', '2024-10-28 09:13:57.318');
INSERT INTO public.migrations VALUES (2645, '/20240117093601-add-more-granular-project-permissions', '2024-10-28 09:13:57.319');
INSERT INTO public.migrations VALUES (2646, '/20240118093611-missing-primary-keys', '2024-10-28 09:13:57.33');
INSERT INTO public.migrations VALUES (2647, '/20240119171200-action-states', '2024-10-28 09:13:57.336');
INSERT INTO public.migrations VALUES (2648, '/20240124123000-add-enabled-to-action-sets', '2024-10-28 09:13:57.338');
INSERT INTO public.migrations VALUES (2649, '/20240125084701-add-user-trends', '2024-10-28 09:13:57.341');
INSERT INTO public.migrations VALUES (2650, '/20240125085703-users-table-increae-image-url-size', '2024-10-28 09:13:57.342');
INSERT INTO public.migrations VALUES (2651, '/20240125090553-events-fix-incorrectly-assigned-sysuser-id', '2024-10-28 09:13:57.343');
INSERT INTO public.migrations VALUES (2652, '/20240125100000-events-system-user-old2new', '2024-10-28 09:13:57.344');
INSERT INTO public.migrations VALUES (2653, '/20240126095544-add-flag-trends', '2024-10-28 09:13:57.354');
INSERT INTO public.migrations VALUES (2654, '/20240130104757-flag-trends-health-time-to-production', '2024-10-28 09:13:57.356');
INSERT INTO public.migrations VALUES (2655, '/20240207164033-client-applications-announced-index', '2024-10-28 09:13:57.361');
INSERT INTO public.migrations VALUES (2656, '/20240208123212-create-stat-traffic-usage-table', '2024-10-28 09:13:57.372');
INSERT INTO public.migrations VALUES (2657, '/20240208130439-events-revision-id-index', '2024-10-28 09:13:57.377');
INSERT INTO public.migrations VALUES (2658, '/20240215133213-flag-trends-users', '2024-10-28 09:13:57.38');
INSERT INTO public.migrations VALUES (2659, '/20240220130622-add-action-state-indexes', '2024-10-28 09:13:57.39');
INSERT INTO public.migrations VALUES (2660, '/20240221082758-action-events', '2024-10-28 09:13:57.401');
INSERT INTO public.migrations VALUES (2661, '/20240221115502-drop-action-states', '2024-10-28 09:13:57.406');
INSERT INTO public.migrations VALUES (2662, '/20240222123532-project-metrics-summary-trends', '2024-10-28 09:13:57.414');
INSERT INTO public.migrations VALUES (2663, '/20240229093231-drop-fk-and-cascade-in-trends', '2024-10-28 09:13:57.417');
INSERT INTO public.migrations VALUES (2664, '/20240304084102-rename-observable-events-to-signals', '2024-10-28 09:13:57.431');
INSERT INTO public.migrations VALUES (2665, '/20240304160659-add-environment-type-trends', '2024-10-28 09:13:57.436');
INSERT INTO public.migrations VALUES (2666, '/20240305094305-features-remove-archived', '2024-10-28 09:13:57.438');
INSERT INTO public.migrations VALUES (2667, '/20240305121426-add-created-at-environment-type-trends', '2024-10-28 09:13:57.439');
INSERT INTO public.migrations VALUES (2668, '/20240305121702-add-metrics-summary-columns-to-flag-trends', '2024-10-28 09:13:57.441');
INSERT INTO public.migrations VALUES (2669, '/20240305131822-add-scim-id-column-to-user', '2024-10-28 09:13:57.443');
INSERT INTO public.migrations VALUES (2670, '/20240306145609-make-scim-id-idx-unique', '2024-10-28 09:13:57.446');
INSERT INTO public.migrations VALUES (2671, '/20240325081847-add-scim-id-for-groups', '2024-10-28 09:13:57.449');
INSERT INTO public.migrations VALUES (2672, '/20240326122126-add-index-on-group-name', '2024-10-28 09:13:57.451');
INSERT INTO public.migrations VALUES (2673, '/20240329064629-revert-feature-archived', '2024-10-28 09:13:57.452');
INSERT INTO public.migrations VALUES (2674, '/20240405120422-add-feature-lifecycles', '2024-10-28 09:13:57.457');
INSERT INTO public.migrations VALUES (2675, '/20240405174629-jobs', '2024-10-28 09:13:57.466');
INSERT INTO public.migrations VALUES (2676, '/20240408104624-fix-environment-type-trends', '2024-10-28 09:13:57.471');
INSERT INTO public.migrations VALUES (2677, '/20240418140646-add-ip-column-to-events-table', '2024-10-28 09:13:57.473');
INSERT INTO public.migrations VALUES (2678, '/20240425132155-flag-trends-bigint', '2024-10-28 09:13:57.482');
INSERT INTO public.migrations VALUES (2679, '/20240430075605-add-scim-external-id', '2024-10-28 09:13:57.487');
INSERT INTO public.migrations VALUES (2680, '/20240506141345-lifecycle-initial-stage', '2024-10-28 09:13:57.489');
INSERT INTO public.migrations VALUES (2681, '/20240507075431-client-metrics-env-daily-bigint', '2024-10-28 09:13:57.499');
INSERT INTO public.migrations VALUES (2682, '/20240508153244-feature-lifecycles-status', '2024-10-28 09:13:57.501');
INSERT INTO public.migrations VALUES (2683, '/20240523093355-toggle-to-flag-rename', '2024-10-28 09:13:57.503');
INSERT INTO public.migrations VALUES (2684, '/20240523113322-roles-toggle-to-flag-rename', '2024-10-28 09:13:57.504');
INSERT INTO public.migrations VALUES (2685, '/20240611092538-add-created-by-to-features-view', '2024-10-28 09:13:57.508');
INSERT INTO public.migrations VALUES (2686, '/20240705111827-used-passwords-table', '2024-10-28 09:13:57.516');
INSERT INTO public.migrations VALUES (2687, '/20240716135038-integration-events', '2024-10-28 09:13:57.524');
INSERT INTO public.migrations VALUES (2688, '/20240806140453-add-archived-at-to-projects', '2024-10-28 09:13:57.527');
INSERT INTO public.migrations VALUES (2689, '/20240812120954-add-archived-at-to-projects', '2024-10-28 09:13:57.53');
INSERT INTO public.migrations VALUES (2690, '/20240812132633-events-type-index', '2024-10-28 09:13:57.533');
INSERT INTO public.migrations VALUES (2691, '/20240821141555-segment-no-project-cleanup', '2024-10-28 09:13:57.536');
INSERT INTO public.migrations VALUES (2692, '/20240823091442-normalize-token-types', '2024-10-28 09:13:57.538');
INSERT INTO public.migrations VALUES (2693, '/20240828154255-user-first-seen-at', '2024-10-28 09:13:57.539');
INSERT INTO public.migrations VALUES (2694, '/20240830102144-onboarding-events', '2024-10-28 09:13:57.548');
INSERT INTO public.migrations VALUES (2695, '/20240903152133-clear-onboarding-events', '2024-10-28 09:13:57.55');
INSERT INTO public.migrations VALUES (2696, '/20240904084114-add-update-feature-dependency-editor', '2024-10-28 09:13:57.553');
INSERT INTO public.migrations VALUES (2697, '/20240919083625-client-metrics-env-variants-daily-to-bigint', '2024-10-28 09:13:57.56');
INSERT INTO public.migrations VALUES (2698, '/20241016090534-ai-chats', '2024-10-28 09:13:57.569');
INSERT INTO public.migrations VALUES (2699, '/20241016123833-ai-chats-rename-chat-col-to-messages', '2024-10-28 09:13:57.571');


--
-- Data for Name: notifications; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: onboarding_events_instance; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: onboarding_events_project; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: permissions; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.permissions VALUES (1, 'ADMIN', 'Admin', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (3, 'CREATE_STRATEGY', 'Create activation strategies', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (4, 'CREATE_ADDON', 'Create addons', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (5, 'DELETE_ADDON', 'Delete addons', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (6, 'UPDATE_ADDON', 'Update addons', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (9, 'UPDATE_APPLICATION', 'Update applications', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (10, 'UPDATE_TAG_TYPE', 'Update tag types', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (11, 'DELETE_TAG_TYPE', 'Delete tag types', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (12, 'CREATE_PROJECT', 'Create projects', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (13, 'UPDATE_PROJECT', 'Update project', 'project', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (14, 'DELETE_PROJECT', 'Delete project', 'project', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (15, 'UPDATE_STRATEGY', 'Update strategies', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (16, 'DELETE_STRATEGY', 'Delete strategies', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (17, 'UPDATE_CONTEXT_FIELD', 'Update context fields', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (18, 'CREATE_CONTEXT_FIELD', 'Create context fields', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (19, 'DELETE_CONTEXT_FIELD', 'Delete context fields', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (20, 'READ_ROLE', 'Read roles', 'root', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (25, 'CREATE_FEATURE_STRATEGY', 'Create activation strategies', 'environment', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (26, 'UPDATE_FEATURE_STRATEGY', 'Update activation strategies', 'environment', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (27, 'DELETE_FEATURE_STRATEGY', 'Delete activation strategies', 'environment', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (50, 'CREATE_CLIENT_API_TOKEN', 'Create CLIENT API tokens', 'root', '2024-10-28 09:13:57.05624+01');
INSERT INTO public.permissions VALUES (29, 'UPDATE_FEATURE_VARIANTS', 'Create/edit variants', 'project', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (31, 'CREATE_SEGMENT', 'Create segments', 'root', '2024-10-28 09:13:56.820596+01');
INSERT INTO public.permissions VALUES (32, 'UPDATE_SEGMENT', 'Edit segments', 'root', '2024-10-28 09:13:56.820596+01');
INSERT INTO public.permissions VALUES (33, 'DELETE_SEGMENT', 'Delete segments', 'root', '2024-10-28 09:13:56.820596+01');
INSERT INTO public.permissions VALUES (42, 'READ_PROJECT_API_TOKEN', 'Read api tokens for a specific project', 'project', '2024-10-28 09:13:56.990177+01');
INSERT INTO public.permissions VALUES (43, 'CREATE_PROJECT_API_TOKEN', 'Create api tokens for a specific project', 'project', '2024-10-28 09:13:56.990177+01');
INSERT INTO public.permissions VALUES (44, 'DELETE_PROJECT_API_TOKEN', 'Delete api tokens for a specific project', 'project', '2024-10-28 09:13:56.990177+01');
INSERT INTO public.permissions VALUES (37, 'UPDATE_FEATURE_ENVIRONMENT_VARIANTS', 'Update variants', 'environment', '2024-10-28 09:13:56.958642+01');
INSERT INTO public.permissions VALUES (36, 'APPLY_CHANGE_REQUEST', 'Apply change requests', 'environment', '2024-10-28 09:13:56.940023+01');
INSERT INTO public.permissions VALUES (51, 'UPDATE_CLIENT_API_TOKEN', 'Update CLIENT API tokens', 'root', '2024-10-28 09:13:57.05624+01');
INSERT INTO public.permissions VALUES (45, 'UPDATE_PROJECT_SEGMENT', 'Create/edit project segment', 'project', '2024-10-28 09:13:57.023379+01');
INSERT INTO public.permissions VALUES (38, 'SKIP_CHANGE_REQUEST', 'Skip change request process', 'environment', '2024-10-28 09:13:56.975024+01');
INSERT INTO public.permissions VALUES (52, 'DELETE_CLIENT_API_TOKEN', 'Delete CLIENT API tokens', 'root', '2024-10-28 09:13:57.05624+01');
INSERT INTO public.permissions VALUES (53, 'READ_CLIENT_API_TOKEN', 'Read CLIENT API tokens', 'root', '2024-10-28 09:13:57.05624+01');
INSERT INTO public.permissions VALUES (35, 'APPROVE_CHANGE_REQUEST', 'Approve/Reject change requests', 'environment', '2024-10-28 09:13:56.940023+01');
INSERT INTO public.permissions VALUES (2, 'CREATE_FEATURE', 'Create feature flags', 'project', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (7, 'UPDATE_FEATURE', 'Update feature flags', 'project', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (8, 'DELETE_FEATURE', 'Delete feature flags', 'project', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (30, 'MOVE_FEATURE_TOGGLE', 'Change feature flag project', 'project', '2024-10-28 09:13:56.795959+01');
INSERT INTO public.permissions VALUES (28, 'UPDATE_FEATURE_ENVIRONMENT', 'Enable/disable flags', 'environment', '2024-10-28 09:13:56.77926+01');
INSERT INTO public.permissions VALUES (54, 'CREATE_FRONTEND_API_TOKEN', 'Create FRONTEND API tokens', 'root', '2024-10-28 09:13:57.05624+01');
INSERT INTO public.permissions VALUES (55, 'UPDATE_FRONTEND_API_TOKEN', 'Update FRONTEND API tokens', 'root', '2024-10-28 09:13:57.05624+01');
INSERT INTO public.permissions VALUES (56, 'DELETE_FRONTEND_API_TOKEN', 'Delete FRONTEND API tokens', 'root', '2024-10-28 09:13:57.05624+01');
INSERT INTO public.permissions VALUES (57, 'READ_FRONTEND_API_TOKEN', 'Read FRONTEND API tokens', 'root', '2024-10-28 09:13:57.05624+01');
INSERT INTO public.permissions VALUES (58, 'UPDATE_FEATURE_DEPENDENCY', 'Update feature dependency', 'project', '2024-10-28 09:13:57.151399+01');
INSERT INTO public.permissions VALUES (59, 'CREATE_TAG_TYPE', 'Create tag types', 'root', '2024-10-28 09:13:57.196184+01');
INSERT INTO public.permissions VALUES (60, 'PROJECT_USER_ACCESS_READ', 'View only access to Project User Access', 'project', '2024-10-28 09:13:57.319077+01');
INSERT INTO public.permissions VALUES (61, 'PROJECT_DEFAULT_STRATEGY_READ', 'View only access to default strategy configuration for project', 'project', '2024-10-28 09:13:57.319077+01');
INSERT INTO public.permissions VALUES (62, 'PROJECT_CHANGE_REQUEST_READ', 'View only access to change request configuration for project', 'project', '2024-10-28 09:13:57.319077+01');
INSERT INTO public.permissions VALUES (63, 'PROJECT_SETTINGS_READ', 'View only access to project settings', 'project', '2024-10-28 09:13:57.319077+01');
INSERT INTO public.permissions VALUES (64, 'PROJECT_USER_ACCESS_WRITE', 'Write access to Project User Access', 'project', '2024-10-28 09:13:57.319077+01');
INSERT INTO public.permissions VALUES (65, 'PROJECT_DEFAULT_STRATEGY_WRITE', 'Write access to default strategy configuration for project', 'project', '2024-10-28 09:13:57.319077+01');
INSERT INTO public.permissions VALUES (66, 'PROJECT_CHANGE_REQUEST_WRITE', 'Write access to change request configuration for project', 'project', '2024-10-28 09:13:57.319077+01');
INSERT INTO public.permissions VALUES (67, 'PROJECT_SETTINGS_WRITE', 'Write access to project settings', 'project', '2024-10-28 09:13:57.319077+01');


--
-- Data for Name: personal_access_tokens; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: project_client_metrics_trends; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: project_environments; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.project_environments VALUES ('default', 'development', NULL);
INSERT INTO public.project_environments VALUES ('default', 'production', NULL);


--
-- Data for Name: project_settings; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: project_stats; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: public_signup_tokens; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: public_signup_tokens_user; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: reset_tokens; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: role_permission; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.790905+01', 'development', 'CREATE_FEATURE_STRATEGY', NULL, 1);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.790905+01', 'development', 'UPDATE_FEATURE_STRATEGY', NULL, 2);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.790905+01', 'development', 'DELETE_FEATURE_STRATEGY', NULL, 3);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.790905+01', 'development', 'UPDATE_FEATURE_ENVIRONMENT', NULL, 4);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.790905+01', 'production', 'CREATE_FEATURE_STRATEGY', NULL, 5);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.790905+01', 'production', 'UPDATE_FEATURE_STRATEGY', NULL, 6);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.790905+01', 'production', 'DELETE_FEATURE_STRATEGY', NULL, 7);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.790905+01', 'production', 'UPDATE_FEATURE_ENVIRONMENT', NULL, 8);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.790905+01', 'default', 'CREATE_FEATURE_STRATEGY', NULL, 9);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.790905+01', 'default', 'UPDATE_FEATURE_STRATEGY', NULL, 10);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.790905+01', 'default', 'DELETE_FEATURE_STRATEGY', NULL, 11);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.790905+01', 'default', 'UPDATE_FEATURE_ENVIRONMENT', NULL, 12);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.790905+01', 'development', 'CREATE_FEATURE_STRATEGY', NULL, 13);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.790905+01', 'development', 'UPDATE_FEATURE_STRATEGY', NULL, 14);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.790905+01', 'development', 'DELETE_FEATURE_STRATEGY', NULL, 15);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.790905+01', 'development', 'UPDATE_FEATURE_ENVIRONMENT', NULL, 16);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.790905+01', 'production', 'CREATE_FEATURE_STRATEGY', NULL, 17);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.790905+01', 'production', 'UPDATE_FEATURE_STRATEGY', NULL, 18);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.790905+01', 'production', 'DELETE_FEATURE_STRATEGY', NULL, 19);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.790905+01', 'production', 'UPDATE_FEATURE_ENVIRONMENT', NULL, 20);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.790905+01', 'default', 'CREATE_FEATURE_STRATEGY', NULL, 21);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.790905+01', 'default', 'UPDATE_FEATURE_STRATEGY', NULL, 22);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.790905+01', 'default', 'DELETE_FEATURE_STRATEGY', NULL, 23);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.790905+01', 'default', 'UPDATE_FEATURE_ENVIRONMENT', NULL, 24);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.792822+01', 'development', 'CREATE_FEATURE_STRATEGY', NULL, 25);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.792822+01', 'development', 'UPDATE_FEATURE_STRATEGY', NULL, 26);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.792822+01', 'development', 'DELETE_FEATURE_STRATEGY', NULL, 27);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.792822+01', 'development', 'UPDATE_FEATURE_ENVIRONMENT', NULL, 28);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.792822+01', 'production', 'CREATE_FEATURE_STRATEGY', NULL, 29);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.792822+01', 'production', 'UPDATE_FEATURE_STRATEGY', NULL, 30);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.792822+01', 'production', 'DELETE_FEATURE_STRATEGY', NULL, 31);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.792822+01', 'production', 'UPDATE_FEATURE_ENVIRONMENT', NULL, 32);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.792822+01', 'default', 'CREATE_FEATURE_STRATEGY', NULL, 33);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.792822+01', 'default', 'UPDATE_FEATURE_STRATEGY', NULL, 34);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.792822+01', 'default', 'DELETE_FEATURE_STRATEGY', NULL, 35);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.792822+01', 'default', 'UPDATE_FEATURE_ENVIRONMENT', NULL, 36);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'CREATE_FEATURE', NULL, 37);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'CREATE_STRATEGY', NULL, 38);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'CREATE_ADDON', NULL, 39);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'DELETE_ADDON', NULL, 40);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'UPDATE_ADDON', NULL, 41);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'UPDATE_FEATURE', NULL, 42);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'DELETE_FEATURE', NULL, 43);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'UPDATE_APPLICATION', NULL, 44);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'UPDATE_TAG_TYPE', NULL, 45);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'DELETE_TAG_TYPE', NULL, 46);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'CREATE_PROJECT', NULL, 47);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'UPDATE_PROJECT', NULL, 48);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'DELETE_PROJECT', NULL, 49);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'UPDATE_STRATEGY', NULL, 50);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'DELETE_STRATEGY', NULL, 51);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'UPDATE_CONTEXT_FIELD', NULL, 52);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'CREATE_CONTEXT_FIELD', NULL, 53);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'DELETE_CONTEXT_FIELD', NULL, 54);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.77926+01', '', 'UPDATE_FEATURE_VARIANTS', NULL, 55);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.77926+01', '', 'CREATE_FEATURE', NULL, 56);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.77926+01', '', 'UPDATE_FEATURE', NULL, 57);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.77926+01', '', 'DELETE_FEATURE', NULL, 58);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.77926+01', '', 'UPDATE_PROJECT', NULL, 59);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.77926+01', '', 'DELETE_PROJECT', NULL, 60);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.77926+01', '', 'UPDATE_FEATURE_VARIANTS', NULL, 61);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.77926+01', '', 'CREATE_FEATURE', NULL, 62);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.77926+01', '', 'UPDATE_FEATURE', NULL, 63);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.77926+01', '', 'DELETE_FEATURE', NULL, 64);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.77926+01', '', 'UPDATE_FEATURE_VARIANTS', NULL, 65);
INSERT INTO public.role_permission VALUES (1, '2024-10-28 09:13:56.77926+01', '', 'ADMIN', NULL, 66);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.795959+01', '', 'MOVE_FEATURE_TOGGLE', NULL, 67);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.795959+01', '', 'MOVE_FEATURE_TOGGLE', NULL, 68);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.820596+01', NULL, 'CREATE_SEGMENT', NULL, 69);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.820596+01', NULL, 'UPDATE_SEGMENT', NULL, 70);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.820596+01', NULL, 'DELETE_SEGMENT', NULL, 71);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.958642+01', 'development', 'UPDATE_FEATURE_ENVIRONMENT_VARIANTS', NULL, 72);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.958642+01', 'production', 'UPDATE_FEATURE_ENVIRONMENT_VARIANTS', NULL, 73);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.958642+01', 'default', 'UPDATE_FEATURE_ENVIRONMENT_VARIANTS', NULL, 74);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.958642+01', 'development', 'UPDATE_FEATURE_ENVIRONMENT_VARIANTS', NULL, 75);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.958642+01', 'production', 'UPDATE_FEATURE_ENVIRONMENT_VARIANTS', NULL, 76);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.958642+01', 'default', 'UPDATE_FEATURE_ENVIRONMENT_VARIANTS', NULL, 77);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.958642+01', 'development', 'UPDATE_FEATURE_ENVIRONMENT_VARIANTS', NULL, 78);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.958642+01', 'production', 'UPDATE_FEATURE_ENVIRONMENT_VARIANTS', NULL, 79);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.958642+01', 'default', 'UPDATE_FEATURE_ENVIRONMENT_VARIANTS', NULL, 80);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.991679+01', NULL, 'READ_PROJECT_API_TOKEN', NULL, 81);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.991679+01', NULL, 'CREATE_PROJECT_API_TOKEN', NULL, 82);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:56.991679+01', NULL, 'DELETE_PROJECT_API_TOKEN', NULL, 83);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.99327+01', NULL, 'READ_PROJECT_API_TOKEN', NULL, 84);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.99327+01', NULL, 'CREATE_PROJECT_API_TOKEN', NULL, 85);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:56.99327+01', NULL, 'DELETE_PROJECT_API_TOKEN', NULL, 86);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.994874+01', NULL, 'READ_PROJECT_API_TOKEN', NULL, 87);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.994874+01', NULL, 'CREATE_PROJECT_API_TOKEN', NULL, 88);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:56.994874+01', NULL, 'DELETE_PROJECT_API_TOKEN', NULL, 89);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:57.057744+01', NULL, 'READ_CLIENT_API_TOKEN', NULL, 90);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:57.057744+01', NULL, 'READ_FRONTEND_API_TOKEN', NULL, 91);
INSERT INTO public.role_permission VALUES (5, '2024-10-28 09:13:57.151399+01', NULL, 'UPDATE_FEATURE_DEPENDENCY', NULL, 92);
INSERT INTO public.role_permission VALUES (4, '2024-10-28 09:13:57.151399+01', NULL, 'UPDATE_FEATURE_DEPENDENCY', NULL, 93);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:57.196184+01', NULL, 'CREATE_TAG_TYPE', NULL, 94);
INSERT INTO public.role_permission VALUES (2, '2024-10-28 09:13:57.551748+01', NULL, 'UPDATE_FEATURE_DEPENDENCY', NULL, 95);


--
-- Data for Name: role_user; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: settings; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.settings VALUES ('unleash.secret', '"fa8bec875f5f6da0f400f377e0488d681826a74d"');
INSERT INTO public.settings VALUES ('instanceInfo', '{"id" : "0a9468fb-6117-49ff-bd4d-550ac1c21cd7"}');
INSERT INTO public.settings VALUES ('login_history_retention', '{"hours": 336}');


--
-- Data for Name: signal_endpoints; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: signal_endpoint_tokens; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: signals; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: stat_environment_updates; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: stat_traffic_usage; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: strategies; Type: TABLE DATA; Schema: public; Owner: unleash_user
--

INSERT INTO public.strategies VALUES ('2024-10-28 09:13:56.427382+01', 'remoteAddress', 'Enable the feature for a specific set of IP addresses.', '[{"name":"IPs","type":"list","description":"List of IPs to enable the feature toggle for.","required":true}]', 1, false, 3, 'IPs', NULL);
INSERT INTO public.strategies VALUES ('2024-10-28 09:13:56.427382+01', 'applicationHostname', 'Enable the feature for a specific set of hostnames.', '[{"name":"hostNames","type":"list","description":"List of hostnames to enable the feature toggle for.","required":false}]', 1, false, 4, 'Hosts', NULL);
INSERT INTO public.strategies VALUES ('2024-10-28 09:13:56.395952+01', 'default', 'This strategy turns on / off for your entire userbase. Prefer using "Gradual rollout" strategy (100%=on, 0%=off).', '[]', 1, false, 1, 'Standard', NULL);
INSERT INTO public.strategies VALUES ('2024-10-28 09:13:56.476541+01', 'flexibleRollout', 'Roll out to a percentage of your userbase, and ensure that the experience is the same for the user on each visit.', '[{"name":"rollout","type":"percentage","description":"","required":false},{"name":"stickiness","type":"string","description":"Used define stickiness. Possible values: default, userId, sessionId, random","required":true},{"name":"groupId","type":"string","description":"Used to define a activation groups, which allows you to correlate across feature toggles.","required":true}]', 1, false, 0, 'Gradual rollout', NULL);
INSERT INTO public.strategies VALUES ('2024-10-28 09:13:56.427382+01', 'userWithId', 'Enable the feature for a specific set of userIds. Prefer using "Gradual rollout" strategy with user id constraints.', '[{"name":"userIds","type":"list","description":"","required":false}]', 1, true, 2, 'UserIDs', NULL);


--
-- Data for Name: unleash_session; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: used_passwords; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: user_feedback; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: user_notifications; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: user_splash; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Data for Name: user_trends; Type: TABLE DATA; Schema: public; Owner: unleash_user
--



--
-- Name: action_set_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.action_set_events_id_seq', 1, false);


--
-- Name: action_sets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.action_sets_id_seq', 1, false);


--
-- Name: actions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.actions_id_seq', 1, false);


--
-- Name: addons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.addons_id_seq', 1, false);


--
-- Name: ai_chats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.ai_chats_id_seq', 1, false);


--
-- Name: change_request_approvals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.change_request_approvals_id_seq', 1, false);


--
-- Name: change_request_comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.change_request_comments_id_seq', 1, false);


--
-- Name: change_request_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.change_request_events_id_seq', 1, false);


--
-- Name: change_request_rejections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.change_request_rejections_id_seq', 1, false);


--
-- Name: change_requests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.change_requests_id_seq', 1, false);


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.events_id_seq', 5, true);


--
-- Name: feedback_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.feedback_id_seq', 1, false);


--
-- Name: groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.groups_id_seq', 1, false);


--
-- Name: incoming_webhook_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.incoming_webhook_tokens_id_seq', 1, false);


--
-- Name: incoming_webhooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.incoming_webhooks_id_seq', 1, false);


--
-- Name: integration_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.integration_events_id_seq', 1, false);


--
-- Name: login_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.login_events_id_seq', 1, false);


--
-- Name: message_banners_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.message_banners_id_seq', 1, false);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.migrations_id_seq', 2699, true);


--
-- Name: notifications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.notifications_id_seq', 1, false);


--
-- Name: observable_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.observable_events_id_seq', 1, false);


--
-- Name: permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.permissions_id_seq', 67, true);


--
-- Name: personal_access_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.personal_access_tokens_id_seq', 1, false);


--
-- Name: role_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.role_permission_id_seq', 95, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.roles_id_seq', 5, true);


--
-- Name: segments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.segments_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: unleash_user
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

