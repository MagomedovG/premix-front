import style from './container.module.scss'
import React, { ReactNode, useCallback, useEffect, useState,useRef } from 'react'
import type { PropsWithChildren } from "react";


export default function Container (props: PropsWithChildren<{}>) {
    const {children} = props
    return (
        <div className={style.section_wrapper} >
            <section className={style.section}>
                {children}
            </section>
      </div>
    );
  }
  