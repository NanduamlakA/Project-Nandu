import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { GridColDef } from '@mui/x-data-grid';
import { Fragment } from 'react';
import { StakeholderOperationLocation } from 'src/types/stakeholder/stakeholder-operation-location';
import { formatCreatedAt } from 'src/utils/formatter/date';
import ModelAction from 'src/views/components/custom/model-actions';
import RowOptions from 'src/views/shared/listing/row-options';

interface CellType {
  row: StakeholderOperationLocation;
}

export const stakeholderOperationLocationColumns = (
  onDetail: (stakeholderOperationLocation: StakeholderOperationLocation) => void,
  onEdit: (stakeholderOperationLocation: StakeholderOperationLocation) => void,
  onDelete: (id: string) => void,
  t: any,
  refetch: () => void
): GridColDef[] => [
  {
    flex: 0.15,
    minWidth: 120,
    field: 'id',
    renderCell: ({ row }: CellType) => (
      <Typography
        noWrap
        component={Button}
        onClick={() => onDetail(row)}
        sx={{
          fontWeight: 500,
          textDecoration: 'none',
          color: 'text.secondary',
          '&:hover': { color: 'primary.main' }
        }}
      >
        {row?.id.slice(0, 5)}...
      </Typography>
    )
  },
  {
    flex: 0.15,
    minWidth: 120,
    headerName: t('stakeholder.stakeholder-operation-location.country'),
    field: 'country',
    renderCell: ({ row }: CellType) => (row?.country ? row.country : t('common.not-available'))
  },
  {
    flex: 0.15,
    minWidth: 120,
    headerName: t('stakeholder.stakeholder-operation-location.status'),
    field: 'status',
    renderCell: ({ row }: CellType) => (
      <Typography sx={{ color: 'text.secondary' }}>{row?.status ? t('common.active') : t('common.inactive')}</Typography>
    )
  },

  {
    flex: 0.15,
    minWidth: 120,
    headerName: t('common.table-columns.created-at'),
    field: 'created_at',
    renderCell: ({ row }: CellType) => (
      <Typography sx={{ color: 'text.secondary' }}>
        {row?.created_at ? formatCreatedAt(row.created_at) : t('common.not-available')}
      </Typography>
    )
  },
  {
    minWidth: 150,
    sortable: false,
    field: 'actions',
    headerName: t('common.table-columns.actions'),
    renderCell: ({ row }: CellType) => (
      <Fragment>
        <ModelAction
          model="StakeholderOperationLocation"
          model_id={row.id}
          refetchModel={refetch}
          resubmit={() => {}}
          title=""
          postAction={() => {}}
        />
        <RowOptions onEdit={() => onEdit(row)} onDelete={() => onDelete(row.id)} item={row} options={[]} />
      </Fragment>
    )
  }
];
