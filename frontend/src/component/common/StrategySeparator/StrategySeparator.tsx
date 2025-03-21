import { styled } from '@mui/material';

const Chip = styled('div')(({ theme }) => ({
    padding: theme.spacing(0.75, 1),
    fontSize: theme.fontSizes.smallerBody,
    position: 'absolute',
    zIndex: theme.zIndex.fab,
    top: 0,
    transform: 'translateY(-50%)',
    lineHeight: 1,
    borderRadius: theme.shape.borderRadiusLarge,
    backgroundColor: theme.palette.secondary.border,
    left: theme.spacing(4),
}));

export const StrategySeparator = ({ className }: { className?: string }) => {
    return (
        <Chip role='separator' className={className}>
            OR
        </Chip>
    );
};
