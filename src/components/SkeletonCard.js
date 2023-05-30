import Skeleton from 'react-loading-skeleton'

export const SkeletonCard = () => {
    return (
        <div className={'card'}>
            <p className={'title'}>{<Skeleton count={1}/>}</p>
            <p className={'description'}>{<Skeleton count={3}/>}</p>
            <p className={'control'}>
                {<Skeleton count={1} width='70px'/>}

            </p>
        </div>
    );
};