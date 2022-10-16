import type { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
    console.log(event)
    return {
        statusCode: 200,
        body: "DONE!"
    }
}

export { handler }
