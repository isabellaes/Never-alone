import react from 'react'
import { render , fireEvent } from '@testing-library/react-native'
import Meditation from './Meditation'
import React from 'react'
import { Linking } from 'react-native'

describe('test the meditation compnent', () => {
    it('two buttons with correct text and url', async () => {
        const { getByText } = render(<Meditation />)
        const toMeditationButton = getByText('Direkt till meditation')
        const moreAboutMeditationButton = getByText('Mer om meditation..')

        expect(toMeditationButton).toBeTruthy();
        expect(moreAboutMeditationButton).toBeTruthy()

        fireEvent.press(toMeditationButton)
        fireEvent.press(moreAboutMeditationButton)

        expect(Linking.canOpenURL).toHaveBeenCalledWith(
            'https://www.youtube.com/results?search_query=meditation'
        )

        expect(Linking.canOpenURL).toHaveBeenCalledWith(
            'https://www.mindful.org/how-to-meditate/'
        )
    })
})
