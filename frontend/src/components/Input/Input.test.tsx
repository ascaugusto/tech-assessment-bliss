import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Input from '.'

describe('<Input />', () => {
	test('Should input is defined', () => {
		render(
			<Input
				value='Testing'
				onClearSearch={() => console.log('onClearSearch')}
			/>
		)
		expect(screen.getByDisplayValue(/Testing/i)).toBeDefined()
	})
})