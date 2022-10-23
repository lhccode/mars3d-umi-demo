import styles from './index.less';
import Map from './map';

export default function IndexPage() {
  return (
    <div className={styles.panel}>
      <Map></Map>
    </div>
  );
}
