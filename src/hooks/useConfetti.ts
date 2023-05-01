/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useEffect } from 'react';
import { useReward } from 'react-rewards';

export function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

const useConfetti = ({ leftId, rightId }: { leftId: string; rightId: string }) => {
    const { reward, isAnimating } = useReward(leftId, 'confetti', {
        position: 'absolute',
        lifetime: 300,
        angle: 65,
        decay: 0.93,
        spread: 70,
        startVelocity: 40,
        elementCount: 70,
    });
    const { reward: reward2, isAnimating: isAnimating2 } = useReward(rightId, 'confetti', {
        position: 'absolute',
        lifetime: 300,
        angle: 115,
        decay: 0.93,
        spread: 70,
        startVelocity: 40,
        elementCount: 70,
    });

    useEffect(() => {
        if (!isAnimating && !isAnimating2) {
            reward();
            setTimeout(reward2, 500);
        }
    }, [isAnimating, isAnimating2]);
};

export default useConfetti;
