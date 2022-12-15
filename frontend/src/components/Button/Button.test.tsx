import {describe, expect, test} from 'vitest';
import { render, screen } from '@testing-library/react';

import Button from '.'

describe('<Button />', () => {
	test('Should button is defined', () => {
		render(
			<Button
				onClick={() => {console.log('onClick ---')}}
			>
				Testing
			</Button>
		)
		expect(screen.getByText(/Testing/i)).toBeDefined()
	})
})