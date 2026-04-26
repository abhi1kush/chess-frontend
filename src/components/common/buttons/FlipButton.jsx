import { useDispatch, useSelector } from 'react-redux';
import { flipBoard } from '../../../redux/actions/settingsActions';

const FlipButton = () => {
    const dispatch = useDispatch();
    const { isFlipped } = useSelector((state) => state.game);

    return (
        <button
          type="button"
          onClick={() => dispatch(flipBoard())}
          className={`top-icon-button top-icon-button--with-tooltip${isFlipped ? ' top-icon-button--active' : ''}`}
          data-tooltip={isFlipped ? 'Unflip board' : 'Flip board'}
          aria-label={isFlipped ? 'Unflip board' : 'Flip board'}
        >
            ⇅
        </button>
    );
}  

export default FlipButton
