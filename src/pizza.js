import React, {useState, useEffect} from 'react'
import * as yup from 'yup'
import axios from 'axios'

const schema = yup.object().shape({
    name: yup.string().required('user is required').min(2, 'name needs to be atleast 2 characters'),
    pizzaSize: yup.string().oneOf(['1', '2', '3', '4'], 'You must select a size'),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    sausage: yup.boolean(),
    peppers: yup.boolean(),
    specialInstructions: yup.string()
})

 const Pizza = (props) => {
     const [disabled, setDisabled] = useState(false)
     const [errors, setErros] = useState({ name: '', pizzaSize: ''})
     const [formData, setFormData] = useState({
        name: '',
        pizzaSize: '',
        pepperoni: false,
        pineapple: false,
        sausage: false,
        peppers: false,
        specialInstructions: '',
      
        
      })

      const setFormErrors = (name, value) => {
          yup.reach(schema, name).validate(value)
          .then(() => setErros({...errors, [name]: ''}))
          .catch(err => setErros({...errors, [name]: err.errors[0]}))
      }

      const onChange = (evt) => {
        const {checked, value, name, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse)
        setFormData({...formData, [name]: valueToUse})    
    }


    useEffect(() => {
        schema.isValid(formData).then(valid => setDisabled(!valid))
    }, [formData])

        const onSubmit = (evt) => {
            evt.preventDefault()
            const newOrder = {name: formData.name.trim(), pizzaSize: formData.pizzaSize, pepperoni: formData.pepperoni, pineapple: formData.pineapple, sausage: formData.sausage, peppers: formData.peppers, specialInstructions: formData.specialInstructions.trim()}

            axios.post('https://reqres.in/api/users', newOrder)
            .then(res => {
                setFormData({
                    name: '',
                    pizzaSize: '',
                    pepperoni: false,
                    pineapple: false,
                    sausage: false,
                    peppers: false,
                    specialInstructions: '',
                  
                    
                  })
                  console.log(formData)
            })
            .catch( err => {
                debugger
            })
        }

    return (
        <div>
            <div style={{color: 'red'}}>
    <div>{errors.name}</div><div>{errors.pizzaSize}</div>
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <label> {/* Name Input*/}
                        Name:
                        <input 
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={onChange}
                        placeholder='Name for Order'
                        />
                    </label>
                </div>
                <div>
                        <label> {/* SIZE DROPDOWN*/}
                            Size:
                            <select value={formData.pizzaSize} onChange={onChange} name='pizzaSize' id='dropdown'>
                                <option value="">
                                    -- Choose a Size --
                                </option>
                                <option value='1'>
                                    Small
                                </option>
                                <option value='2'>
                                    Medium
                                </option>
                                <option value='3'>
                                    Large
                                </option>
                                <option value='4'>
                                    X-Large
                                </option>
                            </select>
                            </label>
                </div>
                <div>
                <label> {/* TOPPINGS CHECKBOXES*/}
                        Pepperoni
                        <input 
                        onChange={onChange}
                        type='checkbox'
                        name='pepperoni'
                        checked={formData.pepperoni}
                        />
                    </label>
                    <label>
                        Pineapple
                        <input 
                        onChange={onChange} 
                        type='checkbox'
                        name='pineapple'
                        checked={formData.pineapple}
                        />
                    </label>
                    <label>
                        Sausage
                        <input 
                        onChange={onChange} 
                        type='checkbox'
                        name='sausage'
                        checked={formData.sausage}
                        />
                    </label>
                    <label>
                        Peppers
                        <input 
                        onChange={onChange} 
                        type='checkbox'
                        name='peppers'
                        checked={formData.peppers}
                        />
                    </label>
                </div>
                    <div>
                    <label> {/* SPECIAL INSTRUCTIONS Input*/}
                        Special Instructions 
                        <input 
                        onChange={onChange} 
                        type='text'
                        name='specialInstructions'
                        value={formData.specialInstructions}
                        onChange={onChange}
                        />
                    </label>
                    </div>
                <button disabled={disabled}id='submitBtn'>Order Now!</button>
            </form>
        </div>
    )
}


export default Pizza;