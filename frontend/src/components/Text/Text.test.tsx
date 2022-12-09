import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Text from '.'

test('<Text />', () => {
	const tree = renderer.create(
		<Text>
        Teste
		</Text>).toJSON()
	expect(tree).toMatchSnapshot()
})