import React from 'react';
import styles from './Form.module.css';

const Form = () => {
    return ( 
        <div className={`${styles.search} row`}>
            <div className='col s12 m8 offset-m2'>
                <form>
                    <h2 className={styles.heading}>Search news</h2>
                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value='Search'
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Form;