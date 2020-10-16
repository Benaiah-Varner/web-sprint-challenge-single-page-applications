import React from 'react'

 const pizza = (props) => {
     
     const [formData, setFormData] = useState({
        name: '',
        pizzaType: '',
        pizzaSize: '',
        pepperoni: true,
        pineapple: true,
        sausage: true,
        peppers: true,
        specialInstructions: '',
      
        
      })

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input 
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange=''
                    placeholder='Name for Order'
                    />
                </label>
                <label>
                    Size:
                    <select>
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
                    <label>
                        Pepperoni
                        <input 
                        type='checkbox'
                        name='pepperoni'
                        checked={value.pepperoni}
                        />
                    </label>
                    <label>
                        Pineapple
                        <input 
                        type='checkbox'
                        name='pepperoni'
                        checked={value.pineapple}
                        />
                    </label>
                    <label>
                        Sausage
                        <input 
                        type='checkbox'
                        name='sausage'
                        checked={value.sausage}
                        />
                    </label>
                    <label>
                        Peppers
                        <input 
                        type='checkbox'
                        name='peppers'
                        checked={value.peppers}
                        />
                    </label>
                
            </form>
        </div>
    )
}


export default pizza;