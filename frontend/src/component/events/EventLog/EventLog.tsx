import { Switch, FormControlLabel, useMediaQuery } from '@mui/material';
import EventJson from 'component/events/EventJson/EventJson';
import { PageContent } from 'component/common/PageContent/PageContent';
import { PageHeader } from 'component/common/PageHeader/PageHeader';
import EventCard from 'component/events/EventCard/EventCard';
import { useEventSettings } from 'hooks/useEventSettings';
import { useState, useEffect } from 'react';
import { Search } from 'component/common/Search/Search';
import theme from 'themes/theme';
import { useLegacyEventSearch } from 'hooks/api/getters/useEventSearch/useLegacyEventSearch';
import { useOnVisible } from 'hooks/useOnVisible';
import { styled } from '@mui/system';
import useUiConfig from 'hooks/api/getters/useUiConfig/useUiConfig';
import { useUiFlag } from 'hooks/useUiFlag';
import { EventLogFilters } from './EventLogFilters';
import type { EventSchema } from 'openapi';
import { useEventLogSearch } from './useEventLogSearch';
import { StickyPaginationBar } from 'component/common/Table/StickyPaginationBar/StickyPaginationBar';

interface IEventLogProps {
    title: string;
    project?: string;
    feature?: string;
}

const StyledEventsList = styled('ul')(({ theme }) => ({
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'grid',
    gap: theme.spacing(2),
}));

const StyledFilters = styled(EventLogFilters)({
    padding: 0,
});

const EventResultWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(2, 4, 4, 4),
    display: 'flex',
    flexFlow: 'column',
    gap: theme.spacing(1),
}));

const NewEventLog = ({ title, project, feature }: IEventLogProps) => {
    const {
        events,
        total,
        loading,
        tableState,
        setTableState,
        filterState,
        pagination,
    } = useEventLogSearch(
        project
            ? { type: 'project', projectId: project }
            : feature
              ? { type: 'flag', flagName: feature }
              : { type: 'global' },
    );

    const setSearchValue = (query = '') => {
        setTableState({ query });
    };
    const { eventSettings, setEventSettings } = useEventSettings();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const onShowData = () => {
        setEventSettings((prev) => ({ showData: !prev.showData }));
    };

    const searchInputField = (
        <Search
            onChange={setSearchValue}
            initialValue={tableState.query || ''}
            debounceTime={500}
        />
    );

    const showDataSwitch = (
        <FormControlLabel
            label='Full events'
            control={
                <Switch
                    checked={eventSettings.showData}
                    onChange={onShowData}
                    color='primary'
                />
            }
        />
    );

    const resultComponent = () => {
        if (loading) {
            return <p>Loading...</p>;
        } else if (events.length === 0) {
            return <p>No events found.</p>;
        } else {
            return (
                <StyledEventsList>
                    {events.map((entry) =>
                        eventSettings.showData ? (
                            <EventJson entry={entry} />
                        ) : (
                            <EventCard entry={entry} />
                        ),
                    )}
                </StyledEventsList>
            );
        }
    };

    return (
        <PageContent
            bodyClass={'no-padding'}
            header={
                <PageHeader
                    title={`${title} (${total})`}
                    actions={
                        <>
                            {showDataSwitch}
                            {!isSmallScreen && searchInputField}
                        </>
                    }
                >
                    {isSmallScreen && searchInputField}
                </PageHeader>
            }
        >
            <EventResultWrapper>
                <StyledFilters
                    logType={project ? 'project' : feature ? 'flag' : 'global'}
                    state={filterState}
                    onChange={setTableState}
                />
                {resultComponent()}
            </EventResultWrapper>
            {total > 25 ? (
                <StickyPaginationBar
                    totalItems={total}
                    pageSize={pagination.pageSize}
                    pageIndex={pagination.currentPage}
                    fetchPrevPage={pagination.prevPage}
                    fetchNextPage={pagination.nextPage}
                    setPageLimit={pagination.setPageLimit}
                />
            ) : null}
        </PageContent>
    );
};

export const LegacyEventLog = ({ title, project, feature }: IEventLogProps) => {
    const [query, setQuery] = useState('');
    const { events, totalEvents, fetchNextPage } = useLegacyEventSearch(
        project,
        feature,
        query,
    );
    const fetchNextPageRef = useOnVisible<HTMLDivElement>(fetchNextPage);
    const { eventSettings, setEventSettings } = useEventSettings();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    // Cache the previous search results so that we can show those while
    // fetching new results for a new search query in the background.
    const [cache, setCache] = useState<EventSchema[]>();
    useEffect(() => events && setCache(events), [events]);

    const onShowData = () => {
        setEventSettings((prev) => ({ showData: !prev.showData }));
    };

    const searchInputField = <Search onChange={setQuery} debounceTime={500} />;

    const showDataSwitch = (
        <FormControlLabel
            label='Full events'
            control={
                <Switch
                    checked={eventSettings.showData}
                    onChange={onShowData}
                    color='primary'
                />
            }
        />
    );

    const count = events?.length || 0;
    const totalCount = totalEvents || 0;
    const countText = `${count} of ${totalCount}`;

    return (
        <PageContent
            header={
                <PageHeader
                    title={`${title} (${countText})`}
                    actions={
                        <>
                            {showDataSwitch}
                            {!isSmallScreen && searchInputField}
                        </>
                    }
                >
                    {isSmallScreen && searchInputField}
                </PageHeader>
            }
        >
            {cache && cache.length === 0 ? <p>No events found.</p> : null}
            {cache && cache.length > 0 ? (
                <StyledEventsList>
                    {cache?.map((entry) =>
                        eventSettings.showData ? (
                            <EventJson entry={entry} />
                        ) : (
                            <EventCard entry={entry} />
                        ),
                    )}
                </StyledEventsList>
            ) : null}
            <div ref={fetchNextPageRef} />
        </PageContent>
    );
};

export const EventLog = (props: IEventLogProps) => {
    const { isEnterprise } = useUiConfig();
    const showFilters = useUiFlag('newEventSearch') && isEnterprise();
    if (showFilters) {
        return <NewEventLog {...props} />;
    } else {
        return <LegacyEventLog {...props} />;
    }
};
