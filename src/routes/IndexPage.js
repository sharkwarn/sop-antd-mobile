import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { List, InputItem, Button } from 'antd-mobile';

function IndexPage() {
  return (
    <div className={styles.normal}>
        <Button type="primary" size="small">按钮</Button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
