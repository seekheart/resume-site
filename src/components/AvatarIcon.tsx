interface AvatarIconProps {
    imagePath: string;
    altText: string;
    className?: string;
}

export const AvatarIcon = ({imagePath, altText, className}: AvatarIconProps) => {
    const defaultClasses = 'rounded-full';
    const iconClasses = [...new Set(`${className} ${defaultClasses}`.split(' '))].join(' ');

    return (
        <img className={iconClasses}
             src={imagePath}
             alt={altText}
        />
    )
}