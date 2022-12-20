import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../store/actions/categoriesActions'
import BasePage from './BasePage/BasePage'

function MainPage() {
    const dispatch = useDispatch()
    const {categories} = useSelector(state=>state.categories)
    useEffect(()=>{
        dispatch(fetchCategories())
    }, [dispatch])

    console.log(categories)

    //TODO Сделать через antd карусель

    return (
        <BasePage>
        {Object.entries(categories).map(
            ([category, {photos, total}])=>(
                <div key={category} className="flex items-center gap-2 capitalize">
                    <h1>{category}</h1> 
                    <span>{total}</span>
                </div>
            )
        )}
        </BasePage>
    )
}

export default MainPage
