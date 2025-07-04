import MaterialIcon from '@/shared/components/material-icon'
import { useTranslation } from 'react-i18next'
import { ToolbarMenuBar } from './menu-bar'
import { ToolbarProjectTitle } from './project-title'
import { OnlineUsers } from './online-users'
import ShareProjectButton from './share-project-button'
import ChangeLayoutButton from './change-layout-button'
import ShowHistoryButton from './show-history-button'
import { LabsActions } from './labs-actions'
import { useLayoutContext } from '@/shared/context/layout-context'
import BackToEditorButton from '@/features/editor-navigation-toolbar/components/back-to-editor-button'
import { useCallback } from 'react'
import * as eventTracking from '../../../../infrastructure/event-tracking'
import OLTooltip from '@/features/ui/components/ol/ol-tooltip'
import UpgradeButton from './upgrade-button'
import getMeta from '@/utils/meta'

export const Toolbar = () => {
  const { view, setView } = useLayoutContext()

  const handleBackToEditorClick = useCallback(() => {
    eventTracking.sendMB('navigation-clicked-history', { action: 'close' })
    setView('editor')
  }, [setView])

  if (view === 'history') {
    return (
      <div className="ide-redesign-toolbar">
        <div className="d-flex align-items-center">
          <BackToEditorButton onClick={handleBackToEditorClick} />
        </div>
        <ToolbarProjectTitle />
        <div /> {/* Empty div used for spacing */}
      </div>
    )
  }

  return (
    <div className="ide-redesign-toolbar">
      <ToolbarMenus />
      <ToolbarProjectTitle />
      <ToolbarButtons />
    </div>
  )
}

const ToolbarMenus = () => {
  const { t } = useTranslation()
  return (
    <div className="ide-redesign-toolbar-menu">
      <OLTooltip
        id="tooltip-home-button"
        description={t('back_to_your_projects')}
        overlayProps={{ delay: 0, placement: 'bottom' }}
      >
        <div className="ide-redesign-toolbar-home-button">
          <a href="/project" className="ide-redesign-toolbar-home-link">
            <span className="toolbar-ol-logo" aria-label={t('overleaf_logo')} />
            <MaterialIcon type="home" className="toolbar-ol-home-button" />
          </a>
        </div>
      </OLTooltip>
      <ToolbarMenuBar />
    </div>
  )
}

const ToolbarButtons = () => {
  return (
    <div className="ide-redesign-toolbar-actions">
      <LabsActions />
      <OnlineUsers />
      <ShowHistoryButton />
      <ChangeLayoutButton />
      <ShareProjectButton />
      {getMeta('ol-showUpgradePrompt') && <UpgradeButton />}
    </div>
  )
}
