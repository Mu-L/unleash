import UsersList from './UsersList/UsersList';
import { ADMIN } from 'component/providers/AccessProvider/permissions';
import { PermissionGuard } from 'component/common/PermissionGuard/PermissionGuard';
import { Route, Routes } from 'react-router-dom';
import EditUser from './EditUser/EditUser';
import NotFound from 'component/common/NotFound/NotFound';
import { InactiveUsersList } from './InactiveUsersList/InactiveUsersList';
import { AccessOverview } from './AccessOverview/AccessOverview';
import { PremiumFeature } from '../../common/PremiumFeature/PremiumFeature';
import { ConditionallyRender } from '../../common/ConditionallyRender/ConditionallyRender';
import useUiConfig from 'hooks/api/getters/useUiConfig/useUiConfig';

export const UsersAdmin = () => {
    const { isEnterprise } = useUiConfig();
    return (
        <div>
            <PermissionGuard permissions={ADMIN}>
                <Routes>
                    <Route
                        index
                        element={
                            <>
                                <UsersList />
                            </>
                        }
                    />
                    <Route path=':id/edit' element={<EditUser />} />
                    <Route path=':id/access' element={<AccessOverview />} />
                    <Route
                        path='inactive'
                        element={
                            <ConditionallyRender
                                condition={isEnterprise()}
                                show={<InactiveUsersList />}
                                elseShow={
                                    <PremiumFeature
                                        feature='inactive-users'
                                        page
                                    />
                                }
                            />
                        }
                    />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </PermissionGuard>
        </div>
    );
};

export default UsersAdmin;
