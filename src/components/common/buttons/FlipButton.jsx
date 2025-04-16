import { useDispatch, useSelector } from 'react-redux';
import { flipBoard } from '../../../redux/actions/settingsActions';

const FlipButton = () => {
    const dispatch = useDispatch();
    const { isFlipped } = useSelector((state) => state.game);

    return (
        <button onClick={() => dispatch(flipBoard())} className="action-button">
            {isFlipped ? 'Unflip Board' : 'Flip Board'}
        </button>
    );
}  

export default FlipButton
