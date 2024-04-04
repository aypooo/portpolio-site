import { useInView } from 'react-intersection-observer';

const useScrollAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // 애니메이션이 한 번만 발생하도록 설정
    threshold: 0.25, // 섹션의 25%가 보일 때 애니메이션 시작
  });

  return { ref, inView };
};

export default useScrollAnimation;