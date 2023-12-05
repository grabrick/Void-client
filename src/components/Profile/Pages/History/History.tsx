import SlicedReveal from '@/components/UI/Reveal/SlicedReveal';
import m from './History.module.scss'

const History = () => {
  return (
    <SlicedReveal delay={0.5} duration={0.5}>
      <div className={m.container}>
        {/* <div className={m.content}> */}
          <h1 className={m.title}>Coming soon...</h1>
        {/* </div> */}
      </div>
    </SlicedReveal>
  );
}

export default History;