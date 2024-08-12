import { Tooltip, Box } from '@mui/material';
import { ReactComponent as CaseSensitive } from 'assets/icons/24_Text format.svg';
import { ReactComponent as CaseSensitiveOff } from 'assets/icons/24_Text format off.svg';
import {
    StyledToggleButtonOff,
    StyledToggleButtonOn,
} from '../StyledToggleButton';
import type { IConstraint } from 'interfaces/strategy';

interface CaseSensitiveButtonProps {
    localConstraint: IConstraint;
    setCaseInsensitive: () => void;
}

export const CaseSensitiveButton = ({
    localConstraint,
    setCaseInsensitive,
}: CaseSensitiveButtonProps) => (
    <Tooltip
        title={
            localConstraint.caseInsensitive
                ? 'Make it case sensitive'
                : 'Make it case insensitive'
        }
        arrow
    >
        <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
            {localConstraint.caseInsensitive ? (
                <StyledToggleButtonOff
                    onClick={setCaseInsensitive}
                    disableRipple
                >
                    <CaseSensitiveOff />
                </StyledToggleButtonOff>
            ) : (
                <StyledToggleButtonOn
                    className='operator-is-active'
                    onClick={setCaseInsensitive}
                    disableRipple
                >
                    <CaseSensitive />
                </StyledToggleButtonOn>
            )}
        </Box>
    </Tooltip>
);
