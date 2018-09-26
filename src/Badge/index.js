// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { TYPE_OPTIONS, TOKENS } from "./consts";

import type { Props } from "./index";

const getTypeToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.backgroundBadgeNeutral,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundBadgeInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundBadgeSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundBadgeWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundBadgeCritical,
      [TYPE_OPTIONS.DARK]: theme.orbit.backgroundBadgeDark,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite,
    },
    [TOKENS.color]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.colorTextBadgeNeutral,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextBadgeInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextBadgeSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextBadgeWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextBadgeCritical,
      [TYPE_OPTIONS.DARK]: theme.orbit.colorTextBadgeDark,
      [TYPE_OPTIONS.WHITE]: theme.orbit.colorInkDark,
    },
  };

  return tokens[name][type];
};

const StyledBadge = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: inline-flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.orbit.heightBadge};
  line-height: ${({ theme }) => theme.orbit.heightBadge};
  width: ${({ circled, theme }) => circled && theme.orbit.widthBadgeCircled};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  background-color: ${getTypeToken(TOKENS.background)};
  color: ${getTypeToken(TOKENS.color)};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusBadge};
  padding: 0 8px; // TODO: create token paddingBadge
`;

StyledBadge.defaultProps = {
  theme: defaultTokens,
};

const IconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  margin-right: ${({ theme }) => theme.orbit.marginRightBadgeIcon};

  svg {
    height: ${({ theme }) => theme.orbit.widthIconSmall};
    width: ${({ theme }) => theme.orbit.heightIconSmall};
    color: ${getTypeToken(TOKENS.color)};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTokens,
};

const Badge = (props: Props) => {
  const { type = TYPE_OPTIONS.NEUTRAL, icon, children, circled } = props;

  return (
    <StyledBadge type={type} circled={circled}>
      {icon && <IconContainer type={type}>{icon}</IconContainer>}
      {children}
    </StyledBadge>
  );
};

export default Badge;