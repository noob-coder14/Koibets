import * as React from 'react';


export function Withdraw() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='withdraw-container flex-col flex1'>
            <div className='form-item flex1'>
                <select >
                    <option>
                        Select A withdrawal Method
                    </option>

                </select>


            </div>
            <div className='form-item'>
                <input placeholder='Username' />


            </div>
            <div className='form-item'>
                <input placeholder='Password' />

            </div>
            <div className='flex-row'>


                <div className='cradit-amount flex-row justify-between align-center'>
                    <p>
                        Cradited Amount :
                    </p>
                    <div className='margin'>

                    </div>
                    <div className='margin'>

                    </div>
                    <div className='margin'>

                    </div>

                    <input>

                    </input>$


                </div>

            </div>
        </div>
    );
}