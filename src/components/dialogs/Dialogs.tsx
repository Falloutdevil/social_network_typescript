

import s from './Dialogs.module.css';


export const Dialogs = () => {
  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
                    Nick
            </div>
            <div className={s.dialog}>
                    Pick
            </div>
            <div className={s.dialog}>
                    Vika
            </div>
        </div>
          <div className={s.messages}>
              <div className={s.message}>Hi</div>
              <div className={s.message}>123123</div>
              <div className={s.message}>sdfsdf</div>
          </div>
      </div>
  )
}