import React, {ChangeEvent} from "react";
import './header.scss'

interface IProps {
    searchText?: string;
    value?: string;
    logoHandler?: () => void;
    searchHandler?: (value: string) => void;
}

export const HeaderLayout: React.FC<IProps> = ({logoHandler, searchHandler, searchText, value, children}) => {
    return (
        <React.Fragment>
            <div className='header'>
                <h2 className='header-title' onClick={logoHandler}>Github Searcher</h2>
                {
                    searchHandler && (
                        <input
                            className='header-search'
                            type="text"
                            value={value ?? ''}
                            placeholder={searchText}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => searchHandler(e.target.value)}
                        />
                    )
                }
            </div>
            {children}
        </React.Fragment>
    )
}