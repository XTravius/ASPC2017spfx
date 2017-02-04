import * as React from 'react';
import { css } from 'office-ui-fabric-react';
import styles from './CustomersProducts.module.scss';
import { ICustomersProductsProps } from './ICustomersProductsProps';
//import * as $ from "jquery";

export default class CustomersProducts extends React.Component<ICustomersProductsProps, void> {
  public render(): React.ReactElement<ICustomersProductsProps> {
    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className='ms-Grid-row ms-bgColor-neutralSecondary ms-fontColor-white'>
            <div className='ms-Grid-col ms-u-lg12'>
              <div className='ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg6'>
                <h2>Customers:</h2>
              </div>
              <div className='ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg6'>
                <h2>Products:</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
