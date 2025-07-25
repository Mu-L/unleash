---
id: scim
title: Provisioning
---

import SearchPriority from '@site/src/components/SearchPriority';

<SearchPriority level="high" />

:::note Availability

**Plan**: [Enterprise](https://www.getunleash.io/pricing) | **Version**: `6.1+`

:::

Unleash supports provisioning through the [SCIM Protocol](https://scim.cloud/), making it easy to manage users and groups directly through your SSO provider. Users and groups that are assigned or unassigned in your Unleash SSO application will automatically be synced to Unleash. Our provisioning implementation only supports soft deletes so your audit log will be preserved when users are deprovisioned.

See our how to guides on setting up provisioning for [Okta](../how-to/how-to-setup-provisioning-with-okta.md) or [Entra](../how-to/how-to-setup-provisioning-with-entra.md) (formerly known as Azure).

## Advantages

**Deprovisioning**

Deprovisioning can be setup on the provider side and allow for automatic clean up of users in a single place. This is especially useful if you're trying to manage the cost of your Unleash instance, since deprovisioned users will not count towards the seat count of your license.

**Group syncing**

Some SSO providers, for example Entra, have limitations on the number of users that can be synced using the [group syncing](../how-to/how-to-set-up-group-sso-sync) flow. Provisioning allows your provider to sync groups lazily in the background and side step this limitation.

## Not supported

- User password syncing
- User/group role mapping

If you have a need for these features, please reach out to us.