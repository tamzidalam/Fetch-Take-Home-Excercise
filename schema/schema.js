import AJV from 'ajv'


const ajv = new AJV();


const schema = {
    type: 'object',
    properties: {
      retailer: { type: 'string' },
      purchaseDate: { type: 'string', pattern: '^\\d{4}-\\d{2}-\\d{2}$' },
      purchaseTime: { type: 'string',  pattern: '^\\d{2}:\\d{2}$' },
      total: { type: 'string', pattern: '^\\d+\\.\\d{2}$' },
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            shortDescription: { type: 'string' },
            price: { type: 'string', pattern: '^\\d+\\.\\d{2}$' }
          },
          required: ['shortDescription', 'price']
        }
      }
    },
    required: ['retailer', 'purchaseDate', 'purchaseTime', 'total', 'items']
  };
  



const validate = ajv.compile(schema);

const validateJsonData = (jsonData) => {
    const valid = validate(jsonData);
    if (valid) {
      console.log('The JSON data is valid.');
      return true;
    } else {
      console.log('The JSON data is invalid.');
      console.log('Validation errors:', validate.errors);
      return false;
    }
  };
  
  export default validateJsonData;