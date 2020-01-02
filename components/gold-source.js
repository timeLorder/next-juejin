import React from 'react'
import { useSelector } from 'react-redux'
import GoldSourceTop from "./gold-source-top";
import GoldSourceBody from "./gold-source-body";

export default function GoldSource() {
  const goldType = useSelector(state => state.goldType)
  const goldShowType = useSelector(state => state.goldShowType)
  const goldOffset = useSelector(state => state.goldOffset)
  const goldList = useSelector(state => state.goldList)
  const goldListFilled = useSelector(state => state.goldListFilled)

  return (
    <div className="gold-source">
      <GoldSourceTop goldType={goldType} goldShowType={goldShowType} />
      <GoldSourceBody goldType={goldType} goldShowType={goldShowType} goldOffset={goldOffset} goldList={goldList} filled={goldListFilled} />
      <style jsx>{`
        .gold-source {
          position: relative;
          display: flex;
          flex-direction: column;
          cursor: default;
          user-select: none;
          flex: 0 0 auto;
          width: 33.97rem;
        }
      `}</style>
    </div>
  )
}

