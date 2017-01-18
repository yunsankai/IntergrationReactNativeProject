//
//  ViewController.h
//  TempProject
//
//  Created by liuguojing on 16/8/8.
//  Copyright © 2016年 yuanyu. All rights reserved.
//

#import <UIKit/UIKit.h>

//@protocol RootViewControllerDelegate <NSObject>
//
//- (void)popToRootViewController;
//
//@end

@interface ViewController : UIViewController


@end

// CalendarManager.h
#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>



@interface CalendarManager : NSObject <RCTBridgeModule>

//@property(nonatomic,weak)id<RootViewControllerDelegate>delegate;

@end


