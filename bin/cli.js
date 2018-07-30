#!/usr/bin/env node

require('../src').run().catch((err) => {
    process.exit(err.code)
})
