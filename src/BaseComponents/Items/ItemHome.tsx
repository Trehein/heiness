import React from 'react'
import { useNavigate } from 'react-router-dom';
import { baseStyles } from '../../globalStyles/baseStyles';
import ItemList from './ItemList';

export const ItemHome: React.FC = () => {
    const baseClasses = baseStyles()
    const navigate = useNavigate();

    const CreateItemButton = () => {
        return (
            <button
                onClick={() => navigate('/items/create')}
            >
                Add Item
            </button>
        )
    }

    return (
        <div style={baseClasses.contentContainer}>
            <CreateItemButton />
            <ItemList />
        </div>
    )
}

export default ItemHome


