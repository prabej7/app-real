import { useDevTheme } from '@/hooks';
import { InputProps, Input as InputTamangUI } from 'tamagui';

const Input: React.FC<InputProps> = (props) => {
    const { primary, offBg, text,border } = useDevTheme();
    return <InputTamangUI {...props} style={{ fontFamily: "Regular" }} focusStyle={{ borderColor: primary }} borderColor={border} backgroundColor={offBg} color={text}  />
};

export default Input;
