import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

require.extensions['.css'] = () => undefined
require.extensions['.scss'] = () => undefined