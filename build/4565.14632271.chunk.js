"use strict";(self.webpackChunkstrapitest=self.webpackChunkstrapitest||[]).push([[4565],{24565:(c,O,e)=>{e.d(O,{ReviewWorkflowsAssigneeEE:()=>A,ReviewWorkflowsStageEE:()=>S});var s=e(67294),r=e(96987),i=e(16607),E=e(10574),o=e(51435),l=e(45697),t=e.n(l),n=e(86978),T=e(5318);function S({color:a,name:W}){const{themeColorName:g}=(0,T.k)(a);return s.createElement(r.k,{alignItems:"center",gap:2,maxWidth:(0,o.Q1)(300)},s.createElement(i.x,{height:2,background:a,borderColor:g==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),s.createElement(E.Z,{fontWeight:"regular",textColor:"neutral700",ellipsis:!0},W))}S.defaultProps={color:n.FT},S.propTypes={color:t().string,name:t().string.isRequired};var _=e(86896),R=e(21892);function A({user:a}){const{formatMessage:W}=(0,_.Z)();return s.createElement(E.Z,{textColor:"neutral800"},(0,R.Gf)(a,W))}A.propTypes={user:t().shape({firstname:t().string,lastname:t().string,username:t().string}).isRequired}},86978:(c,O,e)=>{e.d(O,{$k:()=>a,Ef:()=>C,FT:()=>u,Nj:()=>R,Ot:()=>S,QM:()=>n,VS:()=>W,_X:()=>f,bc:()=>_,gu:()=>i,k_:()=>A,lv:()=>g,qZ:()=>t,rg:()=>o,sN:()=>r,uL:()=>v,x4:()=>T,yq:()=>E,zn:()=>l});var s=e(12255);const r="settings_review-workflows",i="Settings/Review_Workflows/RESET_WORKFLOW",E="Settings/Review_Workflows/SET_CONTENT_TYPES",o="Settings/Review_Workflows/SET_IS_LOADING",l="Settings/Review_Workflows/SET_ROLES",t="Settings/Review_Workflows/SET_WORKFLOW",n="Settings/Review_Workflows/SET_WORKFLOWS",T="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",S="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",_="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",R="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",A="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",a="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",W="Settings/Review_Workflows/WORKFLOW_UPDATE",g={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},u=s.W.colors.primary600,v={STAGE:"stage"},C="numberOfWorkflows",f="stagesPerWorkflow"},5318:(c,O,e)=>{e.d(O,{k:()=>i,s:()=>E});var s=e(12255),r=e(86978);function i(o){if(!o)return null;const t=Object.entries(s.W.colors).filter(([,n])=>n.toUpperCase()===o.toUpperCase()).reduce((n,[T])=>(r.lv?.[T]&&(n=T),n),null);return t?{themeColorName:t,name:r.lv[t]}:null}function E(){return Object.entries(r.lv).map(([o,l])=>({hex:s.W.colors[o].toUpperCase(),name:l}))}}}]);
