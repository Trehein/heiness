import React from 'react'
import { useNavigate } from 'react-router-dom';
import { generalStyles } from '../../generalStyles';
import ItemList from './ItemList';

export const ItemHome: React.FC = () => {
    const generalClasses = generalStyles()
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
        <div style={generalClasses.contentContainer}>
            <CreateItemButton />
            <ItemList />
        </div>
    )
}

export default ItemHome


