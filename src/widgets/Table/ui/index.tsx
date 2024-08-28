import { DuoRow, EmptyRow, Row, SingleRow } from '@/entities/TableRow'
import React from 'react'

export const Table = () => {
	return (
		<div>
			<Row mark={1} LED_1={false} LED_2={false} info='ПОЖАР' />
			<Row mark={2} LED_1={false} LED_2={false} info='ТРЕВОГА' />
			<Row mark={3} LED_1={false} LED_2={false} info='НЕИСПР.' />
			<Row mark={4} LED_1={false} LED_2={false} info='ОТКЛ.' />
			<EmptyRow />
			<EmptyRow />
			<EmptyRow />
			<SingleRow LED_1={false} info='БЛОК.' />
			<DuoRow
				LED_1={false}
				info_1='СЕТЬ'
				LED_2={false}
				info_2='Звук откл/ТЕСТ'
			/>
			<DuoRow LED_1={false} info_1='АКБ' LED_2={false} info_2='ПУСК/СБРОС' />
		</div>
	)
}
