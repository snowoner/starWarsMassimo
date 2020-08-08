import {
    trigger,
    animate,
    style,
    transition,
    state,
    animation,
    useAnimation,
} from '@angular/animations';

const params = animation(
    [
        style({
            opacity: '{{opacity}}',
            transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
        }),
        animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
    ],
    {
        params: {
            duration: '200ms',
            delay: '0ms',
            opacity: '0',
            scale: '1',
            x: '0',
            y: '0',
            z: '0'
        }
    }
);

export const appAnimations = [
    trigger('animate', [transition('void => *', [useAnimation(params)])]),
    trigger('fade', [
        transition(
            ':enter', [
            style({ opacity: 0 }),
            animate('200ms ease', style({ opacity: 1 }))
        ]
        ),
        transition(
            ':leave', [
            style({ opacity: 1 }),
            animate('200ms ease', style({ opacity: 0 })),
        ]
        )
    ])
];
