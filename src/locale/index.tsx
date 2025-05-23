import {createIntl, createIntlCache} from 'react-intl'

const cache = createIntlCache()

const intl = createIntl({
    locale: 'fr-FR',
    messages: {}
}, cache)

intl.formatNumber(20)

export default intl
