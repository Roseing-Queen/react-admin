import {createIntl, createIntlCache} from 'react-intl'

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache()

const intl = createIntl({
    locale: 'fr-FR',
    messages: {}
}, cache)

// Call imperatively
intl.formatNumber(20)

export default intl
