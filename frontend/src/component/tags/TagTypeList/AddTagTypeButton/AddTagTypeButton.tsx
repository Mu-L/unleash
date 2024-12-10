import { ConditionallyRender } from 'component/common/ConditionallyRender/ConditionallyRender';
import PermissionButton from 'component/common/PermissionButton/PermissionButton';
import PermissionIconButton from 'component/common/PermissionIconButton/PermissionIconButton';
import { CREATE_TAG_TYPE } from '@server/types/permissions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';

import Add from '@mui/icons-material/Add';

export const AddTagTypeButton = () => {
    const navigate = useNavigate();
    const smallScreen = useMediaQuery('(max-width:700px)');

    return (
        <ConditionallyRender
            condition={smallScreen}
            show={
                <PermissionIconButton
                    onClick={() => navigate('/tag-types/create')}
                    size='large'
                    permission={CREATE_TAG_TYPE}
                >
                    <Add />
                </PermissionIconButton>
            }
            elseShow={
                <PermissionButton
                    permission={CREATE_TAG_TYPE}
                    onClick={() => navigate('/tag-types/create')}
                >
                    New tag type
                </PermissionButton>
            }
        />
    );
};
