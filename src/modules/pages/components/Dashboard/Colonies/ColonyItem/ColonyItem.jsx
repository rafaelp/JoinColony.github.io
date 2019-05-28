/* @flow */

import type { ColonyNetworkClient } from '@colony/colony-js-client';
import type { WalletObjectType } from '@colony/purser-core';

import React, { useEffect, useState } from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

import type { Network } from '~types';

import styles from './ColonyItem.module.css';

const MSG = defineMessages({
  colonyAddress: {
    id: 'pages.Dashboard.Colonies.ColonyItem.colonyAddress',
    defaultMessage: 'Colony Address',
  },
  colonyRootRole: {
    id: 'pages.Dashboard.Colonies.ColonyItem.colonyRootRole',
    defaultMessage: 'Root Role',
  },
  colonyTokenAddress: {
    id: 'pages.Dashboard.Colonies.ColonyItem.colonyTokenAddress',
    defaultMessage: 'Colony Token Address',
  },
  network: {
    id: 'pages.Dashboard.Colonies.ColonyItem.network',
    defaultMessage: 'Network',
  },
});

type Props = {|
  colonyAddress: string,
  network: Network,
  networkClient: ?ColonyNetworkClient,
  wallet: WalletObjectType,
|};

const displayName = 'pages.Dashboard.Colonies.ColonyItem';

const ColonyItem = ({
  colonyAddress,
  network,
  networkClient,
  wallet,
}: Props) => {
  const [colony, setColony] = useState(null);

  useEffect(() => {
    if (networkClient) {
      (async () => {
        const colonyClient = await networkClient.getColonyClientByAddress(
          colonyAddress,
        );
        const {
          address: tokenAddress,
        } = await colonyClient.getTokenAddress.call();
        const { hasRole: rootRole } = await colonyClient.hasColonyRole.call({
          address: wallet.address,
          domainId: 1,
          role: 'ROOT',
        });
        setColony({
          colonyAddress,
          tokenAddress,
          rootRole,
        });
      })();
    }
  }, [colonyAddress, networkClient, wallet.address]);

  return (
    <div className={styles.colony}>
      {colony ? (
        <div className={styles.colonyContent}>
          <div>
            <div className={styles.field}>
              <div className={styles.label}>
                <FormattedMessage {...MSG.colonyAddress} />
              </div>
              <div className={styles.value}>{colony.colonyAddress}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.label}>
                <FormattedMessage {...MSG.colonyTokenAddress} />
              </div>
              <div className={styles.value}>{colony.tokenAddress}</div>
            </div>
          </div>
          <div>
            <div className={styles.field}>
              <div className={styles.label}>
                <FormattedMessage {...MSG.network} />
              </div>
              <div className={styles.value}>{network.slug}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.label}>
                <FormattedMessage {...MSG.colonyRootRole} />
              </div>
              <div className={styles.value}>{colony.rootRole.toString()}</div>
            </div>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

ColonyItem.displayName = displayName;

export default ColonyItem;
