import styles from './page.module.css'
import { Table } from '@/widgets/Table'

export default function Home() {
	return (
		<div className={styles.HomePage}>
			<Table />
		</div>
	)
}
