import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'
    test('debe hacer match con el snapshot', () => {

        render( <GifItem title="{ title }" url="{ url }"/> )
    })
})