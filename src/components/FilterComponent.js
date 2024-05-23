import React, { useState } from 'react'

const FilterComponent = ({ setParams, setParamType }) => {
    const [order, setOrder] = useState('')
    const [costumer, setCostumer] = useState('')

    const handleSubmit = (e, type) => {
        e.preventDefault();
        setParamType(type);
        setParams(type === 'order' ? order : costumer)
    }

    return (
        <form class="row g-3">
            <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">Order Id</label>
                <input type="text" value={order} class="form-control" id="inputPassword2" placeholder="Order Id" onChange={(e) => setOrder(e.target.value)} />
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3" onClick={(e) => handleSubmit(e, 'order')}>
                    <span>
                        <i class="fa fa-search"></i>
                    </span>
                </button>
            </div>
            <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">Customer Id</label>
                <input type="text" value={costumer} class="form-control" id="inputPassword2" placeholder="Customer Id" onChange={(e) => setCostumer(e.target.value)} />
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3" onClick={(e) => handleSubmit(e, 'costumer')}>
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        </form>
    )
}

export default FilterComponent