import type { FC, ReactNode } from 'react';
import { Box, Divider, Link, styled } from '@mui/material';
import { ReactComponent as InstanceHealthIcon } from 'assets/icons/instance-health.svg';
import { useUiFlag } from 'hooks/useUiFlag';

interface IHealthStatsProps {
    value?: string | number;
    technicalDebt?: string | number;
    healthy: number;
    stale: number;
    potentiallyStale: number;
    title?: ReactNode;
}

const StyledContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
}));

const StyledStatsRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 2, 0.5, 2),
}));

const ExplanationRow = styled(StyledStatsRow)(({ theme }) => ({
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
}));

const StyledIcon = styled(InstanceHealthIcon)(({ theme }) => ({
    color: theme.palette.primary.light,
    marginRight: theme.spacing(1.5),
}));

const StyledValue = styled(Box)(({ theme }) => ({
    display: 'block',
    marginLeft: 'auto',
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.fontSizes.mediumHeader,
}));

const StyledSection = styled('div')(({ theme }) => ({
    padding: theme.spacing(3),
    fontSize: theme.fontSizes.smallBody,
}));

const FlagsSection = styled(StyledSection)(({ theme }) => ({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
}));

const StyledHeader = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const StyledMainValue = styled(StyledValue)(({ theme }) => ({
    fontSize: theme.fontSizes.largeHeader,
}));

export const HealthStats: FC<IHealthStatsProps> = ({
    value,
    technicalDebt,
    healthy,
    stale,
    potentiallyStale,
    title,
}) => {
    const healthToDebtEnabled = useUiFlag('healthToTechDebt');

    return (
        <StyledContainer>
            <StyledHeader>
                <StyledSection>{title}</StyledSection>
            </StyledHeader>
            <Divider />
            <StyledSection>
                <StyledStatsRow>
                    <StyledIcon />
                    {healthToDebtEnabled ? 'Technical debt' : 'Instance health'}
                    {healthToDebtEnabled ? (
                        <StyledMainValue>{`${technicalDebt}%`}</StyledMainValue>
                    ) : (
                        <StyledMainValue>{`${value || 0}%`}</StyledMainValue>
                    )}
                </StyledStatsRow>
            </StyledSection>
            <Divider />
            <FlagsSection>
                <StyledStatsRow>
                    Healthy flags
                    <StyledValue>{healthy || 0}</StyledValue>
                </StyledStatsRow>
                <StyledStatsRow>
                    Stale flags
                    <StyledValue>{stale || 0}</StyledValue>
                </StyledStatsRow>
                <StyledStatsRow>
                    Potentially stale flags
                    <StyledValue>{potentiallyStale || 0}</StyledValue>
                </StyledStatsRow>
                <ExplanationRow>
                    <Link
                        href='https://docs.getunleash.io/reference/insights#health'
                        target='_blank'
                        rel='noreferrer'
                    >
                        {healthToDebtEnabled
                            ? 'What affects technical debt?'
                            : 'What affects instance health?'}
                    </Link>
                </ExplanationRow>
            </FlagsSection>
        </StyledContainer>
    );
};
