import { useStrategiesBySegment } from 'hooks/api/getters/useStrategiesBySegment/useStrategiesBySegment';
import type { ISegment } from 'interfaces/segment';
import { SegmentDeleteConfirm } from './SegmentDeleteConfirm/SegmentDeleteConfirm';
import { SegmentDeleteUsedSegment } from './SegmentDeleteUsedSegment/SegmentDeleteUsedSegment';

interface ISegmentDeleteProps {
    segment: ISegment;
    open: boolean;
    onClose: () => void;
    onRemove: () => void;
}

export const SegmentDelete = ({
    segment,
    open,
    onClose,
    onRemove,
}: ISegmentDeleteProps) => {
    const { strategies, changeRequestStrategies, loading } =
        useStrategiesBySegment(segment.id);
    const canDeleteSegment =
        strategies?.length === 0 && changeRequestStrategies?.length === 0;
    if (loading) {
        return null;
    }

    return canDeleteSegment ? (
        <SegmentDeleteConfirm
            segment={segment}
            open={open}
            onClose={onClose}
            onRemove={onRemove}
        />
    ) : (
        <SegmentDeleteUsedSegment
            segment={segment}
            open={open}
            onClose={onClose}
            strategies={strategies}
            changeRequestStrategies={changeRequestStrategies}
        />
    );
};
