import { PageContent } from 'component/common/PageContent/PageContent';
import { PageHeader } from 'component/common/PageHeader/PageHeader';
import { useEnvironments } from 'hooks/api/getters/useEnvironments/useEnvironments';
import { CreateEnvironmentButton } from 'component/environments/CreateEnvironmentButton/CreateEnvironmentButton';
import { useTable, useGlobalFilter } from 'react-table';
import {
    SortableTableHeader,
    Table,
    TablePlaceholder,
} from 'component/common/Table';
import { useCallback } from 'react';
import { SearchHighlightProvider } from 'component/common/Table/SearchHighlightContext/SearchHighlightContext';
import { Alert, styled, TableBody } from '@mui/material';
import type { MoveListItem } from 'hooks/useDragItem';
import useToast from 'hooks/useToast';
import useEnvironmentApi, {
    createSortOrderPayload,
} from 'hooks/api/actions/useEnvironmentApi/useEnvironmentApi';
import { formatUnknownError } from 'utils/formatUnknownError';
import { EnvironmentRow } from './EnvironmentRow/EnvironmentRow';
import { EnvironmentNameCell } from './EnvironmentNameCell/EnvironmentNameCell';
import { EnvironmentActionCell } from './EnvironmentActionCell/EnvironmentActionCell';
import { EnvironmentIconCell } from './EnvironmentIconCell/EnvironmentIconCell';
import { Search } from 'component/common/Search/Search';
import { HighlightCell } from 'component/common/Table/cells/HighlightCell/HighlightCell';
import { TextCell } from 'component/common/Table/cells/TextCell/TextCell';
import type { IEnvironment } from 'interfaces/environments';
import { useUiFlag } from 'hooks/useUiFlag';
import { PremiumFeature } from 'component/common/PremiumFeature/PremiumFeature';

const StyledAlert = styled(Alert)(({ theme }) => ({
    marginBottom: theme.spacing(4),
}));

export const EnvironmentTable = () => {
    const { changeSortOrder } = useEnvironmentApi();
    const { setToastApiError } = useToast();
    const { environments, mutateEnvironments } = useEnvironments();
    const isFeatureEnabled = useUiFlag('EEA');

    const moveListItem: MoveListItem = useCallback(
        async (dragIndex: number, dropIndex: number, save = false) => {
            const copy = [...environments];
            const tmp = copy[dragIndex];
            copy.splice(dragIndex, 1);
            copy.splice(dropIndex, 0, tmp);
            await mutateEnvironments(copy);

            if (save) {
                try {
                    await changeSortOrder(createSortOrderPayload(copy));
                } catch (error: unknown) {
                    setToastApiError(formatUnknownError(error));
                }
            }
        },
        [changeSortOrder, environments, mutateEnvironments, setToastApiError],
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: { globalFilter },
        setGlobalFilter,
    } = useTable(
        {
            columns: COLUMNS as any,
            data: environments,
            disableSortBy: true,
        },
        useGlobalFilter,
    );

    const headerSearch = (
        <Search initialValue={globalFilter} onChange={setGlobalFilter} />
    );

    const headerActions = (
        <>
            {headerSearch}
            <PageHeader.Divider />
            <CreateEnvironmentButton />
        </>
    );
    const count = rows.length;
    const header = (
        <PageHeader title={`Environments (${count})`} actions={headerActions} />
    );

    if (!isFeatureEnabled) {
        return (
            <PageContent header={header}>
                <PremiumFeature feature='environments' />
            </PageContent>
        );
    }

    return (
        <PageContent header={header}>
            <StyledAlert severity='info'>
                This is the order of environments that you have today in each
                feature flag. Rearranging them here will change also the order
                inside each feature flag.
            </StyledAlert>
            <SearchHighlightProvider value={globalFilter}>
                <Table {...getTableProps()} rowHeight='compact'>
                    <SortableTableHeader headerGroups={headerGroups as any} />
                    <TableBody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <EnvironmentRow
                                    row={row as any}
                                    moveListItem={moveListItem}
                                    key={row.original.name}
                                />
                            );
                        })}
                    </TableBody>
                </Table>
            </SearchHighlightProvider>
            {rows.length === 0 ? (
                globalFilter?.length > 0 ? (
                    <TablePlaceholder>
                        No environments found matching &ldquo;
                        {globalFilter}
                        &rdquo;
                    </TablePlaceholder>
                ) : (
                    <TablePlaceholder>
                        No environments available. Get started by adding one.
                    </TablePlaceholder>
                )
            ) : null}
        </PageContent>
    );
};

const COLUMNS = [
    {
        id: 'Icon',
        width: '1%',
        Cell: ({ row: { original } }: { row: { original: IEnvironment } }) => (
            <EnvironmentIconCell environment={original} />
        ),
        disableGlobalFilter: true,
        isDragHandle: true,
    },
    {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ row: { original } }: { row: { original: IEnvironment } }) => (
            <EnvironmentNameCell environment={original} />
        ),
        minWidth: 350,
    },
    {
        Header: 'Type',
        accessor: 'type',
        Cell: HighlightCell,
    },
    {
        Header: 'Visible in',
        accessor: (row: IEnvironment) =>
            row.projectCount === 1
                ? '1 project'
                : `${row.projectCount} projects`,
        Cell: TextCell,
    },
    {
        Header: 'API Tokens',
        accessor: (row: IEnvironment) =>
            row.apiTokenCount === 1 ? '1 token' : `${row.apiTokenCount} tokens`,
        Cell: TextCell,
    },
    {
        Header: 'Actions',
        id: 'Actions',
        align: 'center',
        width: '1%',
        Cell: ({ row: { original } }: { row: { original: IEnvironment } }) => (
            <EnvironmentActionCell environment={original} />
        ),
        disableGlobalFilter: true,
    },
];
